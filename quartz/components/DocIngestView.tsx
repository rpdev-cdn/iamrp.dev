import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// @ts-expect-error - inline script
import script from "./scripts/docingest-view.inline.ts"

export default (() => {
  const DocIngestView: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "view") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-view-container")}>
        <div class="docingest-header">
          <h2>Indexed Documentation</h2>
          <p class="desc">Browse the searchable docs corpus indexed by DocIngest</p>
        </div>

        <form id="docingest-search-form" class="docingest-search">
          <input 
            type="text" 
            id="search-input" 
            placeholder="Search documentation..." 
            class="search-input"
          />
          <button type="submit" id="search-btn" class="btn-primary">Search</button>
        </form>
        
        <div id="loading-spinner" class="loading-spinner hidden">
          Loading documentation...
        </div>

        <div id="error-message" class="error-message hidden"></div>

        <div id="docs-grid" class="docs-grid"></div>

        <div class="load-more-container">
          <button id="load-more-btn" class="btn-primary hidden">Load More</button>
        </div>
      </div>
    )
  }

  DocIngestView.css = `
    .docingest-view-container {
      color: #ffffff; /* Primary text color */
      padding: 1rem 0;
    }
    
    .docingest-view-container h2 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .docingest-view-container .desc,
    .docingest-view-container .text-gray {
      color: #9ca3af; /* Gray */
      font-size: 0.875rem;
    }

    .docingest-search {
      display: flex;
      gap: 1rem;
      margin: 2rem 0;
    }

    .search-input {
      flex-grow: 1;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(0, 0, 0, 0.3);
      color: #ffffff;
      font-family: inherit;
    }
    
    .search-input:focus {
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
    }

    .btn-primary:hover {
      opacity: 0.9;
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .btn-secondary {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      cursor: pointer;
    }
    
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .docs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .doc-card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .doc-card h3 {
      margin: 0 0 0.5rem 0;
      color: #ffffff;
      font-size: 1.25rem;
    }

    /* Green secondary text for links */
    .doc-link,
    .docingest-view-container a.text-primary {
      color: #4ade80; /* Green */
      text-decoration: none;
      font-size: 0.875rem;
    }

    .doc-link:hover,
    .docingest-view-container a.text-primary:hover {
      text-decoration: underline;
    }

    .doc-card-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .doc-card-actions .btn-full {
      grid-column: span 2;
    }

    .loading-spinner {
      text-align: center;
      padding: 2rem;
      color: #9ca3af;
    }

    .error-message {
      padding: 1rem;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
      border-radius: 4px;
      margin: 1rem 0;
    }

    .hidden {
      display: none !important;
    }

    .load-more-container {
      text-align: center;
      margin-top: 2rem;
    }
  `

  DocIngestView.afterDOMLoaded = script

  return DocIngestView
}) satisfies QuartzComponentConstructor
