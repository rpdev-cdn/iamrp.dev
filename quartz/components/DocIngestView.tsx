import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const DocIngestView: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "view") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-widget", "docingest-view-container")}>
        <div class="docingest-header">
          <h2 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>Indexed Documentation</h2>
          <p class="desc" style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            Browse the searchable docs corpus indexed by DocIngest
          </p>
        </div>

        <form
          id="docingest-search-form"
          class="docingest-search"
          style={{ display: "flex", gap: "1rem", margin: "2rem 0" }}
        >
          <input
            type="text"
            id="search-input"
            placeholder="Search documentation..."
            class="search-input"
            style={{
              flexGrow: 1,
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(0, 0, 0, 0.3)",
              color: "#ffffff",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            id="search-btn"
            class="btn-primary"
            style={{
              backgroundColor: "#4ade80",
              color: "#000000",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
          >
            Search
          </button>
        </form>

        <div
          id="loading-spinner"
          class="loading-spinner hidden"
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "#9ca3af",
            display: "none",
          }}
        >
          Loading documentation...
        </div>

        <div
          id="error-message"
          class="error-message hidden"
          style={{
            padding: "1rem",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            color: "#ef4444",
            borderRadius: "4px",
            margin: "1rem 0",
            display: "none",
          }}
        ></div>

        <div
          id="docs-grid"
          class="docs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        ></div>

        <div class="load-more-container" style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            id="load-more-btn"
            class="btn-primary hidden"
            style={{
              backgroundColor: "#4ade80",
              color: "#000000",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "opacity 0.2s",
              display: "none",
            }}
          >
            Load More
          </button>
        </div>
      </div>
    )
  }

  DocIngestView.css = `
    .docingest-view-container {
      width: 100%;
    }
  `

  DocIngestView.afterDOMLoaded = `
    const API_URL = "https://docingest.iamrp.dev/api"
    let currentPage = 1
    const limit = 20
    let currentSearchTerm = ""

    async function fetchDocuments(page, search = "") {
      try {
        let url = ""
        if (search) {
          url = \`\${API_URL}/docs/fullsearch?q=\${encodeURIComponent(search)}&page=\${page}&limit=\${limit}\`
        } else {
          url = \`\${API_URL}/docs/list?page=\${page}&limit=\${limit}\`
        }

        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(\`Failed to fetch documents: \${response.statusText}\`)
        }

        return await response.json()
      } catch (error) {
        console.error("Error fetching docs:", error)
        throw error
      }
    }

    async function handleAction(action, docId) {
      try {
        const url = action === 'index' 
          ? \`\${API_URL}/docs/index/\${docId}\` 
          : \`\${API_URL}/docs/delete/\${docId}\`
          
        const method = action === 'index' ? 'POST' : 'DELETE'
        
        const response = await fetch(url, { method })
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.detail || \`Failed to \${action} document\`)
        }
        
        alert(\`Successfully \${action === 'index' ? 're-indexed' : 'deleted'} document\`)
        
        document.getElementById("docs-grid").innerHTML = ""
        currentPage = 1
        await loadDocuments(currentPage, currentSearchTerm)
        
      } catch (error) {
        alert(\`Error: \${error.message}\`)
      }
    }

    function createDocCard(doc) {
      const card = document.createElement('div')
      card.className = 'doc-card'
      card.style.cssText = \`
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      \`
      
      const title = doc.title || doc.label || doc.name || "Untitled Document"
      const sections = doc.total_sections || 0
      const docId = doc.documentId || doc.id || ""
      const indexedAt = doc.last_indexed_at || doc.created_at ? new Date(doc.last_indexed_at || doc.created_at).toLocaleString() : "Unknown"

      card.innerHTML = \`
        <h3 style="margin: 0 0 0.5rem 0; color: #ffffff; font-size: 1.25rem;">\${title}</h3>
        <a href="\${doc.url}" target="_blank" rel="noopener noreferrer" class="doc-link" style="color: #4ade80; text-decoration: none; font-size: 0.875rem;">View Source</a>
        <p class="text-gray" style="color: #9ca3af; font-size: 0.875rem;">Sections: \${sections}</p>
        <p class="text-gray" style="color: #9ca3af; font-size: 0.875rem;">Last Indexed: \${indexedAt}</p>
        <div class="doc-card-actions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
          <button class="btn-secondary reindex-btn" data-id="\${docId}" style="background-color: rgba(255, 255, 255, 0.1); color: #ffffff; font-weight: 600; padding: 0.5rem 1rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 4px; cursor: pointer;">Re-Index</button>
          <button class="btn-secondary delete-btn" data-id="\${docId}" style="background-color: rgba(255, 255, 255, 0.1); color: #ef4444; font-weight: 600; padding: 0.5rem 1rem; border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
      \`

      const reindexBtn = card.querySelector('.reindex-btn')
      const deleteBtn = card.querySelector('.delete-btn')
      
      if (reindexBtn && docId) {
        reindexBtn.addEventListener('click', () => handleAction('index', docId.toString()))
      }
      
      if (deleteBtn && docId) {
        deleteBtn.addEventListener('click', () => {
          if (confirm('Are you sure you want to delete this document?')) {
            handleAction('delete', docId.toString())
          }
        })
      }

      return card
    }

    async function loadDocuments(page, search = "", append = false) {
      const grid = document.getElementById("docs-grid")
      const spinner = document.getElementById("loading-spinner")
      const loadMoreBtn = document.getElementById("load-more-btn")
      const errorMsg = document.getElementById("error-message")

      if (!grid || !spinner || !loadMoreBtn || !errorMsg) return

      spinner.style.display = "block"
      if (!append) grid.innerHTML = ""
      errorMsg.style.display = "none"
      loadMoreBtn.style.display = "none"

      try {
        const data = await fetchDocuments(page, search)
        const docs = data.documents || data.items || data.results || []
        const total = data.total || 0

        if (docs.length === 0 && !append) {
          grid.innerHTML = '<p class="text-gray" style="grid-column: 1/-1; text-align: center; color: #9ca3af;">No documents found.</p>'
        } else {
          docs.forEach((doc) => {
            grid.appendChild(createDocCard(doc))
          })
        }

        if ((total > 0 && page * limit < total) || (total === 0 && docs.length === limit)) {
          loadMoreBtn.style.display = "inline-block"
        }

      } catch (error) {
        errorMsg.textContent = error.message || "An error occurred while loading documents."
        errorMsg.style.display = "block"
      } finally {
        spinner.style.display = "none"
      }
    }

    document.addEventListener("nav", () => {
      const container = document.querySelector(".docingest-view-container")
      if (!container) return

      const searchForm = document.getElementById("docingest-search-form")
      const searchInput = document.getElementById("search-input")
      const loadMoreBtn = document.getElementById("load-more-btn")

      currentPage = 1
      currentSearchTerm = ""
      loadDocuments(currentPage, currentSearchTerm)

      if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (e) => {
          e.preventDefault()
          currentSearchTerm = searchInput.value.trim()
          currentPage = 1
          loadDocuments(currentPage, currentSearchTerm)
        })
      }

      if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
          currentPage++
          loadDocuments(currentPage, currentSearchTerm, true)
        })
      }
    })
  `

  return DocIngestView
}) satisfies QuartzComponentConstructor
