# Repository guidance

## Stack and entry points

- This is a customized Quartz v5 static site. Node 22 is required (`.node-version` and CI use 22).
- The published site source is Markdown under `content/`; generated output is written to `public/`.
- `quartz.config.yaml` is the site configuration. It contains theme colors, enabled plugins, component layout, navigation behavior, and page-type overrides.
- `quartz.ts` loads that YAML configuration and layout through `quartz/plugins/loader/config-loader.ts`.
- The main build CLI starts at `quartz/bootstrap-cli.mjs`; `quartz/build.ts` owns the server-side build pipeline.

## Setup and commands

```bash
npm ci
npx quartz build
npx quartz build --serve
npm test
npm run check
npm run format
npm test -- quartz/util/path.test.ts
```

- Use `npm ci` for a clean, lockfile-based install. Do not replace the lockfile unless dependencies are intentionally changing.
- `npx quartz build` is the production build and writes `public/`. `npx quartz build --serve` starts the preview server and live rebuilds.
- `npm test` runs all Node test files via `tsx --test`. Pass a test file after `--` to run one file, for example `npm test -- quartz/util/path.test.ts`.
- `npm run check` runs strict TypeScript checking (`tsc --noEmit`) followed by Prettier checking. `npm run format` writes Prettier formatting across the repository.
- Prettier is configured in `.prettierrc` with no semicolons, two-space indentation, and a 100-column print width.
- The Docker development setup is `docker compose up`; the Docker image also installs plugins and runs Quartz in serve mode.
- Community plugins can be managed with `npx quartz plugin ...`; plugin config is declared in `quartz.config.yaml`, while plugin implementation is generally external/installed under `.quartz/plugins/`.

## Architecture

The build pipeline is:

1. `bootstrap-cli.mjs` parses CLI arguments, bundles Quartz with esbuild, and starts the optional preview/worker processes.
2. `quartz/build.ts` cleans `public/`, globs `content/`, parses Markdown, and runs the configured plugin pipeline.
3. Plugins execute in three stages:
   - transformers convert or annotate parsed content;
   - filters remove content;
   - emitters produce files and site resources.
4. Preact/TSX components assemble the page layout and render HTML. `quartz/components/renderPage.tsx` and `quartz/components/frames/` are the central rendering surfaces.
5. For SPA builds, client navigation dispatches `nav`/`render` lifecycle events for component setup and cleanup.

Key plugin boundaries are in `quartz/plugins/`:

- `config.ts`, `types.ts`, and `vfile.ts` define configuration and plugin contracts.
- `loader/` resolves, installs, and initializes community plugins and component/page/frame manifests.
- `transformers/`, `filters/`, and `emitters/` contain core plugin implementations or plugin registration.
- `pageTypes/` dispatches content to page-type-specific rendering logic.

The core package layering in this Quartz v5 codebase is `@quartz-community/types` -> `@quartz-community/utils` -> `@quartz-community/runtime` -> plugins. Shared plugin dependencies should follow that direction rather than importing across it.

## Content and configuration conventions

- Content pages use YAML frontmatter. Common fields include `title`, `description`, `date`, `tags`, and `aliases`.
- Wikilinks such as `[[Resume/Master_Resume|Curriculum Vitae]]` are supported and should be preserved when appropriate. Internal links are resolved with the `markdownLinkResolution: shortest` setting.
- Quartz supports Obsidian callouts (for example `> [!note]`) and fenced code.
- Folder landing pages follow the repository's folder-note conventions. The URL and link logic intentionally canonicalizes `Folder/Folder.md` to `Folder/`.
- The repository has a customized cyan/purple dark theme and local JetBrains Mono fonts. Theme and layout changes belong in `quartz.config.yaml` and `quartz/styles/` rather than ad hoc CSS in individual pages.
- The page layout distinguishes 404, content, folder, tag, canvas, and bases page types. Layout slot overrides and exclusions are centralized in the `layout.byPageType` section.
- Custom UI assets and component scripts may be inline: component-declared `.inline.ts` files are bundled for the browser and inserted through the resource pipeline.

## Resume PDF Hosting

- `content/Resume/Master_Resume.md` is the web source for the online CV on `iamrp.dev`.
- The downloadable resume PDFs are maintained as curated static flat files in `rpdev-cdn/cdn.iamrp.dev` at `pdf/Richard_Dissell_Resume.pdf` (3-page resume) and `pdf/Richard_Dissell_Master_Resume.pdf` (7-page master resume). Do not auto-overwrite them via CI.

## Deployment

- Pushing `main` runs `.github/workflows/deploy.yml`: install with `npm ci`, build with `npx quartz build`, copy `content/.well-known/security.txt` and `content/pgp.asc`, generate `public/robots.txt`, and deploy `public/` to GitHub Pages.
- Pages requiring public security or identity assets should continue to use `content/.well-known/security.txt` and `content/pgp.asc`; deployment copies them into the output.
