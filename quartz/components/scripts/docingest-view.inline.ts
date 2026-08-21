// Script for DocIngestView component

const DOCINGEST_VIEW_API_URL = "https://docingest.iamrp.dev/api"
let currentPage = 1
const limit = 20
let isSearching = false
let currentSearchTerm = ""

// Define the Document structure we expect from the API
interface DocIngestDocument {
  id?: number | string
  documentId?: string // Depending on API response
  url: string
  title: string
  label?: string
  name?: string
  total_sections?: number
  created_at?: string
  last_indexed_at?: string
}

async function fetchDocuments(page: number, search: string = "") {
  try {
    let url = ""
    if (search) {
      url = `${DOCINGEST_VIEW_API_URL}/docs/fullsearch?q=${encodeURIComponent(search)}&page=${page}&limit=${limit}`
    } else {
      url = `${DOCINGEST_VIEW_API_URL}/docs/list?page=${page}&limit=${limit}`
    }

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch documents: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching docs:", error)
    throw error
  }
}

async function handleAction(action: "index" | "delete", docId: string) {
  try {
    const url =
      action === "index"
        ? `${DOCINGEST_VIEW_API_URL}/docs/index/${docId}`
        : `${DOCINGEST_VIEW_API_URL}/docs/delete/${docId}`

    const method = action === "index" ? "POST" : "DELETE"

    const response = await fetch(url, { method })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `Failed to ${action} document`)
    }

    alert(`Successfully ${action === "index" ? "re-indexed" : "deleted"} document`)

    // Reload the current page/search to reflect changes
    document.getElementById("docs-grid")!.innerHTML = ""
    currentPage = 1
    await loadDocuments(currentPage, currentSearchTerm)
  } catch (error: any) {
    alert(`Error: ${error.message}`)
  }
}

function createDocCard(doc: DocIngestDocument) {
  const card = document.createElement("div")
  card.className = "doc-card"

  const title = doc.title || doc.label || doc.name || "Untitled Document"
  const sections = doc.total_sections || 0
  const docId = doc.documentId || doc.id || ""
  const indexedAt =
    doc.last_indexed_at || doc.created_at
      ? new Date(doc.last_indexed_at || doc.created_at!).toLocaleString()
      : "Unknown"

  card.innerHTML = `
    <h3>${title}</h3>
    <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="doc-link">View Source</a>
    <p class="text-gray">Sections: ${sections}</p>
    <p class="text-gray">Last Indexed: ${indexedAt}</p>
    <div class="doc-card-actions">
      <button class="btn-secondary reindex-btn" data-id="${docId}">Re-Index</button>
      <button class="btn-secondary delete-btn" data-id="${docId}" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">Delete</button>
    </div>
  `

  // Attach event listeners
  const reindexBtn = card.querySelector(".reindex-btn")
  const deleteBtn = card.querySelector(".delete-btn")

  if (reindexBtn && docId) {
    reindexBtn.addEventListener("click", () => handleAction("index", docId.toString()))
  }

  if (deleteBtn && docId) {
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this document?")) {
        handleAction("delete", docId.toString())
      }
    })
  }

  return card
}

async function loadDocuments(page: number, search: string = "", append: boolean = false) {
  const grid = document.getElementById("docs-grid")
  const spinner = document.getElementById("loading-spinner")
  const loadMoreBtn = document.getElementById("load-more-btn")
  const errorMsg = document.getElementById("error-message")

  if (!grid || !spinner || !loadMoreBtn || !errorMsg) return

  spinner.classList.remove("hidden")
  if (!append) grid.innerHTML = ""
  errorMsg.classList.add("hidden")
  loadMoreBtn.classList.add("hidden")

  try {
    const data = await fetchDocuments(page, search)
    const docs = data.documents || data.items || data.results || [] // Handle potential different API response structures
    const total = data.total || 0

    if (docs.length === 0 && !append) {
      grid.innerHTML =
        '<p class="text-gray" style="grid-column: 1/-1; text-align: center;">No documents found.</p>'
    } else {
      docs.forEach((doc: DocIngestDocument) => {
        grid.appendChild(createDocCard(doc))
      })
    }

    // Show load more if there are more items
    // If the API returns a total count, we can check if we've loaded them all.
    // Otherwise, we just check if we got a full page of results.
    if ((total > 0 && page * limit < total) || (total === 0 && docs.length === limit)) {
      loadMoreBtn.classList.remove("hidden")
    }
  } catch (error: any) {
    errorMsg.textContent = error.message || "An error occurred while loading documents."
    errorMsg.classList.remove("hidden")
  } finally {
    spinner.classList.add("hidden")
  }
}

document.addEventListener("nav", () => {
  const container = document.querySelector(".docingest-view-container")
  if (!container) return

  const searchForm = document.getElementById("docingest-search-form") as HTMLFormElement
  const searchInput = document.getElementById("search-input") as HTMLInputElement
  const loadMoreBtn = document.getElementById("load-more-btn")

  // Initial load
  currentPage = 1
  currentSearchTerm = ""
  loadDocuments(currentPage, currentSearchTerm)

  // Handle search
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      currentSearchTerm = searchInput.value.trim()
      currentPage = 1
      loadDocuments(currentPage, currentSearchTerm)
    })
  }

  // Handle load more
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++
      loadDocuments(currentPage, currentSearchTerm, true)
    })
  }
})
