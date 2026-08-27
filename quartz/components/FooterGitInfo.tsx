import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { execSync } from "child_process"

// Executed at build time in Node.js
function getGitCommitHash(): string {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim()
  } catch {
    // Fallback for CI environments or shallow clones
    return process.env.GITHUB_SHA?.slice(0, 7) ?? "dev-build"
  }
}

function getBuildTimestamp(): string {
  return new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })
}

const commitHash = getGitCommitHash()
const buildTimestamp = getBuildTimestamp()

export default ((opts?: { repository?: string }) => {
  const repositoryUrl = opts?.repository ?? "https://github.com/rpdev-cdn/iamrp.dev"

  const FooterGitInfo: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`footer-git-info ${displayClass ?? ""}`}>
        <span class="meta-item">
          <span class="meta-label">BUILD</span>
          <time>{buildTimestamp}</time>
        </span>
        <span class="meta-divider">|</span>
        <span class="meta-item">
          <span class="meta-label">REV</span>
          <a
            href={`${repositoryUrl}/commit/${commitHash}`}
            target="_blank"
            rel="noopener noreferrer"
            class="commit-link"
          >
            <code>{commitHash}</code>
          </a>
        </span>
      </div>
    )
  }

  FooterGitInfo.css = `
  .footer-git-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: var(--codeFont, "JetBrains Mono", monospace);
    font-size: 0.72rem;
    color: var(--gray, #8b889c);
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px dashed var(--lightgray, #1e1b2e);

    .meta-item {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .meta-label {
      color: var(--tertiary, #5fafd7);
      font-weight: 600;
      margin-right: 0.35rem;
    }

    .meta-divider {
      color: var(--lightgray, #1e1b2e);
    }

    code {
      font-family: var(--codeFont, "JetBrains Mono", monospace);
      background: rgba(0, 255, 136, 0.08);
      border: 1px solid rgba(0, 255, 136, 0.25);
      color: #00ff88;
      padding: 0.1rem 0.35rem;
      border-radius: 3px;
      transition: background 0.15s ease, color 0.15s ease;
    }

    a.commit-link:hover code {
      background: rgba(0, 255, 136, 0.2);
      color: #ffffff;
      text-decoration: none;
    }
  }
  `

  return FooterGitInfo
}) satisfies QuartzComponentConstructor
