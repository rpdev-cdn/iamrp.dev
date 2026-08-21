import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const DocIngestAdd: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.frontmatter?.docingest !== "add") {
      return null
    }

    return (
      <div class={classNames(displayClass, "docingest-add-container")}>
        <div class="docingest-header">
          <h2 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>DocIngest URL Ingestion</h2>
          <p class="desc" style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            Add new documents to the ingestion engine.
          </p>
        </div>

        <form
          id="docingest-add-form"
          class="docingest-form"
          style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div
            class="form-group"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label for="url-input" style={{ color: "#ffffff", fontWeight: "bold" }}>
              URL to Ingest
            </label>
            <input
              type="url"
              id="url-input"
              required
              placeholder="https://example.com/docs"
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(0, 0, 0, 0.3)",
                color: "#ffffff",
                fontFamily: "inherit",
              }}
            />
          </div>

          <div
            class="form-group"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label for="doc-id-input" style={{ color: "#ffffff", fontWeight: "bold" }}>
              Document ID (Optional)
            </label>
            <input
              type="text"
              id="doc-id-input"
              placeholder="my-doc-id"
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(0, 0, 0, 0.3)",
                color: "#ffffff",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            id="submit-btn"
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
            Ingest Document
          </button>
        </form>

        <div
          id="status-message"
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            borderRadius: "4px",
            display: "none",
          }}
        ></div>
      </div>
    )
  }

  DocIngestAdd.css = `
    .docingest-add-container {
      width: 100%;
    }
  `

  DocIngestAdd.afterDOMLoaded = `
    document.addEventListener("nav", () => {
      const form = document.getElementById("docingest-add-form")
      const urlInput = document.getElementById("url-input")
      const idInput = document.getElementById("doc-id-input")
      const submitBtn = document.getElementById("submit-btn")
      const statusMsg = document.getElementById("status-message")
      
      if (!form || !urlInput || !submitBtn || !statusMsg) return
      
      form.addEventListener("submit", async (e) => {
        e.preventDefault()
        
        const url = urlInput.value.trim()
        const docId = idInput?.value.trim()
        
        if (!url) return
        
        submitBtn.disabled = true
        submitBtn.textContent = "Ingesting..."
        submitBtn.style.opacity = "0.5"
        
        statusMsg.style.display = "none"
        statusMsg.className = ""
        
        try {
          const apiUrl = "https://docingest.iamrp.dev/api"
          let endpoint = apiUrl + "/docs/index"
          
          const payload = { url }
          if (docId) {
            payload.document_id = docId
          }
          
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          })
          
          if (!response.ok) {
            const errData = await response.json().catch(()=>({}))
            throw new Error(errData.detail || \`Error: \${response.status}\`)
          }
          
          const data = await response.json()
          
          statusMsg.textContent = "Successfully queued for ingestion!"
          statusMsg.style.display = "block"
          statusMsg.style.backgroundColor = "rgba(74, 222, 128, 0.1)"
          statusMsg.style.color = "#4ade80"
          statusMsg.style.border = "1px solid rgba(74, 222, 128, 0.3)"
          
          urlInput.value = ""
          if (idInput) idInput.value = ""
          
        } catch (error) {
          statusMsg.textContent = error.message || "Failed to ingest document."
          statusMsg.style.display = "block"
          statusMsg.style.backgroundColor = "rgba(239, 68, 68, 0.1)"
          statusMsg.style.color = "#ef4444"
          statusMsg.style.border = "1px solid rgba(239, 68, 68, 0.3)"
        } finally {
          submitBtn.disabled = false
          submitBtn.textContent = "Ingest Document"
          submitBtn.style.opacity = "1"
        }
      })
    })
  `

  return DocIngestAdd
}) satisfies QuartzComponentConstructor
