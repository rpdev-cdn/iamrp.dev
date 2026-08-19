import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// @ts-expect-error - inline script
import script from "./scripts/docingest-add.inline.ts"

export default (() => {
  const DocIngestAdd: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "add") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-add-container")}>
        <div class="docingest-header">
          <h2>Ingest Documentation</h2>
          <p class="desc">Enter a URL to crawl and ingest documentation into the corpus.</p>
        </div>

        <form id="docingest-form" class="docingest-form">
          <div class="input-group">
            <label for="url-input">Documentation URL</label>
            <input 
              type="url" 
              id="url-input" 
              placeholder="https://docs.example.com" 
              required 
            />
          </div>
          
          <div class="input-group">
            <label for="include-pattern">Include Pattern (Optional)</label>
            <input 
              type="text" 
              id="include-pattern" 
              placeholder="/docs/*" 
            />
            <p class="desc text-gray">Use * for wildcards.</p>
          </div>
          
          <div class="input-group">
            <label for="exclude-pattern">Exclude Pattern (Optional)</label>
            <input 
              type="text" 
              id="exclude-pattern" 
              placeholder="/api/*" 
            />
          </div>
          
          <div class="input-group">
            <label for="max-pages">Max Pages</label>
            <input 
              type="number" 
              id="max-pages" 
              value="250"
              min="1"
              max="1000"
            />
          </div>

          <button type="submit" id="crawl-button" class="btn-primary">Start Ingestion</button>
        </form>

        <div id="status-container" class="status-container hidden">
          <h3 id="status-text">Ready</h3>
          <div class="progress-bar-container">
            <div id="progress-bar" class="progress-bar"></div>
          </div>
          <p id="metrics-text" class="desc text-gray"></p>
          <div id="debug-log" class="debug-log"></div>
        </div>
      </div>
    )
  }

  DocIngestAdd.css = `
    .docingest-add-container {
      color: #ffffff;
      padding: 1rem 0;
    }
    
    .docingest-add-container h2 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }
    
    .docingest-add-container .text-gray,
    .docingest-add-container .desc {
      color: #9ca3af; /* Gray */
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .docingest-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
      border-radius: 8px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .input-group label {
      color: #ffffff;
      font-weight: 500;
    }

    .input-group input {
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(0, 0, 0, 0.3);
      color: #ffffff;
      font-family: inherit;
    }

    .input-group input:focus {
      outline: none;
      border-color: #4ade80; /* Green */
    }

    .btn-primary {
      background-color: #4ade80; /* Green */
      color: #000000;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;
      align-self: flex-start;
    }

    .btn-primary:hover {
      opacity: 0.9;
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .status-container {
      margin-top: 2rem;
      padding: 1.5rem;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .status-container.hidden {
      display: none;
    }

    .progress-bar-container {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin: 1rem 0;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background: #4ade80; /* Green */
      width: 0%;
      transition: width 0.3s ease;
    }

    .debug-log {
      margin-top: 1rem;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.8rem;
      color: #e5e7eb;
      white-space: pre-wrap;
      max-height: 200px;
      overflow-y: auto;
    }
    
    /* Ensure markdown links override standard styling if needed */
    .docingest-add-container a {
      color: #4ade80;
    }
  `

  DocIngestAdd.afterDOMLoaded = script

  return DocIngestAdd
}) satisfies QuartzComponentConstructor
