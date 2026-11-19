import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const EcosystemNav: QuartzComponent = () => {
  return (
    <nav class="sovereign-ecosystem-bar">
      <div class="ecosystem-inner">
        <div class="ecosystem-brand">
          <a href="https://iamrp.dev" class="eco-brand-link">
            <span class="brand-pulse">●</span>
            <span class="brand-name">RICHARD P. DISSELL</span>
            <span class="brand-sep">//</span>
            <span class="brand-sub">PORTFOLIO</span>
          </a>
        </div>
        <div class="ecosystem-links">
          <a href="/" class="eco-link" data-site="portfolio">Portfolio</a>
          <a href="/Resume/" class="eco-link" data-site="resume">Resume</a>
          <a href="/Resume/Achievements_Matrix" class="eco-link" data-site="achievements">Achievements</a>
          <a href="/Projects/" class="eco-link" data-site="projects">Projects</a>
          <a href="/Projects/Governance-and-Policies/" class="eco-link" data-site="policies">Policies</a>
          <a href="/Contact/" class="eco-link" data-site="contact">Contact</a>
          <a href="https://github.com/IamRPDev" class="eco-link eco-gh" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </nav>
  )
}

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <>
      <EcosystemNav />
      <div id="quartz-body">{children}</div>
    </>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
