import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const DocIngestView: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "view") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-view-wrapper")}>
        <div id="docingest-view-root"></div>
      </div>
    )
  }

  DocIngestView.afterDOMLoaded = `
    const loadScript = () => {
      const root = document.getElementById('docingest-view-root');
      if (root && root.children.length === 0) {
        // Active container ready for Preact app mount
      }
    };
    document.addEventListener("nav", loadScript);
  `

  return DocIngestView
}) satisfies QuartzComponentConstructor
