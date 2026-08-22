import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const DocIngestAdd: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "add") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-add-wrapper")}>
        <div id="docingest-add-root"></div>
      </div>
    )
  }

  DocIngestAdd.afterDOMLoaded = `
    const loadScript = () => {
      // If docingest-quartz bundle is mounted via external plugin, root is populated.
      // Otherwise fallback to trigger nav event.
      const root = document.getElementById('docingest-add-root');
      if (root && root.children.length === 0) {
        // Active container ready for Preact app mount
      }
    };
    document.addEventListener("nav", loadScript);
  `

  return DocIngestAdd
}) satisfies QuartzComponentConstructor
