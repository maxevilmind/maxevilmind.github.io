import{i as e,a as t,b as a}from"./chunks/vendor-DbZKYTSE.js";const r={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact",BLOG:"blog"},s=r.HOME;class n extends e{static properties={href:{type:String},variant:{type:String},fullWidth:{type:Boolean,attribute:"full-width"},target:{type:String}};static styles=t`
    :host {
      display: inline-flex;
    }

    :host([hidden]) {
      display: none;
    }

    .button {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      min-height: 42px;
      overflow: hidden;
      border-radius: var(--radius-pill, 999px);
      border: 1px solid var(--button-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      padding: 0.66rem 1rem;
      text-decoration: none;
      color: var(--button-fg, var(--color-secondary-foreground, #efeaff));
      cursor: pointer;
      background:
        linear-gradient(135deg, var(--button-bg-start, rgba(255, 255, 255, 0.08)), var(--button-bg-end, rgba(255, 255, 255, 0.03))),
        var(--color-secondary, #1a1432);
      transition:
        transform 160ms ease,
        border-color 160ms ease,
        box-shadow 160ms ease,
        color 160ms ease,
        background-color 160ms ease;
      font-family: var(--font-family-mono, monospace);
      font-size: 0.74rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      line-height: 1.2;
      text-transform: uppercase;
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .button::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: repeating-linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.12) 0,
        rgba(255, 255, 255, 0.12) 1px,
        transparent 1px,
        transparent 5px
      );
      opacity: 0.16;
    }

    .button:hover {
      transform: translateY(-1px);
      border-color: var(--button-border-hover, var(--color-border-strong, rgba(94, 252, 255, 0.48)));
      box-shadow: var(--button-shadow, 0 0 24px rgba(94, 252, 255, 0.18));
    }

    .button:active {
      transform: translateY(0);
    }

    .button.primary {
      --button-bg-start: rgba(94, 252, 255, 0.92);
      --button-bg-end: rgba(255, 77, 243, 0.76);
      --button-border: rgba(94, 252, 255, 0.78);
      --button-border-hover: rgba(255, 255, 255, 0.78);
      --button-fg: var(--color-primary-foreground, #021014);
      --button-shadow: 0 0 28px rgba(94, 252, 255, 0.32), 0 0 34px rgba(255, 77, 243, 0.22);
    }

    .button.secondary {
      --button-bg-start: rgba(255, 255, 255, 0.075);
      --button-bg-end: rgba(94, 252, 255, 0.08);
      --button-fg: var(--color-secondary-foreground, #efeaff);
      --button-border: var(--color-border, rgba(160, 133, 255, 0.26));
    }

    .button.ghost {
      --button-bg-start: transparent;
      --button-bg-end: transparent;
      --button-border: transparent;
      --button-fg: var(--color-primary, #5efcff);
      --button-shadow: none;
    }

    .button:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 3px color-mix(in srgb, var(--color-primary, #5efcff) 28%, transparent),
        var(--button-shadow, 0 0 24px rgba(94, 252, 255, 0.18));
    }

    .button.full {
      width: 100%;
    }
  `;constructor(){super(),this.href="",this.variant="secondary",this.fullWidth=!1,this.target="_self"}render(){const e=`button ${this.variant} ${this.fullWidth?"full":""}`;if(this.href){const t="_blank"===this.target?"noopener noreferrer":"";return a`<a class=${e} href=${this.href} target=${this.target} rel=${t}><slot></slot></a>`}return a`<button class=${e} type="button"><slot></slot></button>`}}customElements.define("app-button",n);const o={[r.HOME]:()=>Promise.resolve().then((function(){return d})),[r.PROJECTS]:()=>import("./chunks/ProjectsPage-CdZV18_T.js"),[r.BLOG]:()=>import("./chunks/BlogPage-qGFnhPBf.js"),[r.ABOUT]:()=>import("./chunks/AboutPage-Cxelj4HD.js"),[r.CONTACT]:()=>import("./chunks/ContactPage-Da2QXwUW.js"),blogPost:()=>import("./chunks/BlogPostPage-BT5MIeyv.js")};class i extends e{static properties={currentPage:{type:String},isMenuOpen:{type:Boolean},isPageLoading:{type:Boolean},pageLoadError:{type:String}};constructor(){super(),this.currentPage=s,this.isMenuOpen=!1,this.isPageLoading=!1,this.pageLoadError="",this._loadedPages=new Set([r.HOME]),this._routeLoadToken=0,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const e=window.location.hash.substring(1);e&&Object.values(r).includes(e)||e.startsWith(`${r.BLOG}/`)?this.currentPage=e:e||""!==window.location.hash||(this.currentPage=s),this._loadCurrentPage()}_getPageKey(e=this.currentPage){return e.startsWith(`${r.BLOG}/`)?"blogPost":e}async _loadCurrentPage(){const e=this._getPageKey(),t=o[e]||o[s];if(this._loadedPages.has(e))return this.isPageLoading=!1,void(this.pageLoadError="");const a=++this._routeLoadToken;this.isPageLoading=!0,this.pageLoadError="";try{await t(),this._loadedPages.add(e)}catch(e){this.pageLoadError="Could not load this page."}finally{a===this._routeLoadToken&&(this.isPageLoading=!1)}}_prefetchRoute(e){const t=this._getPageKey(e);this._loadedPages.has(t)||o[t]?.().then((()=>this._loadedPages.add(t))).catch((()=>{}))}_navigateTo(e){window.location.hash=e}createRenderRoot(){return this}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}_closeMenu(){this.isMenuOpen=!1}render(){return a`
      <div class="app-shell">
        ${this._renderHeader()}
        <main class="page-main container">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `}_renderHeader(){return a`
      <header class="site-header">
        <nav class="site-nav container">
          <h1 class="brand">
            <span class="brand-mark">ML</span>
            <span class="brand-copy">
              <span class="brand-name">Maksim Larionov</span>
              <span class="brand-status">portfolio os / online</span>
            </span>
          </h1>

          <div class="desktop-nav">
            <span class="nav-status">signal stable</span>
            ${this._renderNavButton(r.HOME,"Home")}
            ${this._renderNavButton(r.PROJECTS,"Projects")}
            ${this._renderNavButton(r.BLOG,"Blog")}
            ${this._renderNavButton(r.ABOUT,"About")}
            ${this._renderNavButton(r.CONTACT,"Contact")}
          </div>

          <button 
            @click=${this._toggleMenu}
            class="icon-button mobile-toggle"
            aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>
        </nav>
      </header>
    `}_renderMobileMenu(){return a`
      <div
        class="mobile-menu-overlay ${this.isMenuOpen?"":"is-hidden"}"
        @click=${this._closeMenu}>
      </div>

      <div class="mobile-menu-panel ${this.isMenuOpen?"is-open":""}">
        <div>
          <div class="panel-header">
            <div>
              <p class="eyebrow">navigation</p>
              <p class="panel-code">mobile uplink</p>
            </div>
            <button 
              @click=${this._closeMenu}
              class="icon-button"
              aria-label="Close menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>
          </div>
          <div class="terminal-lines">
            <span class="terminal-line">select route</span>
            <span class="terminal-line">session is encrypted-ish</span>
          </div>
          <div class="mobile-menu-list">
            ${this._renderMobileNavButton(r.HOME,"Home")}
            ${this._renderMobileNavButton(r.PROJECTS,"Projects")}
            ${this._renderMobileNavButton(r.BLOG,"Blog")}
            ${this._renderMobileNavButton(r.ABOUT,"About")}
            ${this._renderMobileNavButton(r.CONTACT,"Contact")}
          </div>
        </div>
      </div>
    `}_renderNavButton(e,t){const r=this.currentPage===e||this.currentPage.startsWith(`${e}/`);return a`
      <app-button
        variant="${r?"primary":"secondary"}"
        @pointerenter=${()=>this._prefetchRoute(e)}
        @focusin=${()=>this._prefetchRoute(e)}
        @click=${()=>this._navigateTo(e)}>
        ${t}
      </app-button>
    `}_renderMobileNavButton(e,t){const r=this.currentPage===e||this.currentPage.startsWith(`${e}/`);return a`
      <app-button
        variant="${r?"primary":"secondary"}"
        full-width
        @pointerenter=${()=>this._prefetchRoute(e)}
        @focusin=${()=>this._prefetchRoute(e)}
        @click=${()=>{this._navigateTo(e),this._closeMenu()}}>
        ${t}
      </app-button>
    `}_renderPage(){if(this.isPageLoading)return a`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">loading route</p>
            <p>Opening transmission...</p>
          </div>
        </section>
      `;if(this.pageLoadError)return a`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">route unavailable</p>
            <p>${this.pageLoadError}</p>
          </div>
        </section>
      `;switch(this.currentPage){case r.HOME:return a`<home-page></home-page>`;case r.PROJECTS:return a`<projects-page></projects-page>`;case r.BLOG:return a`<blog-page></blog-page>`;case r.ABOUT:return a`<about-page></about-page>`;case r.CONTACT:return a`<contact-page></contact-page>`;default:if(this.currentPage.startsWith(`${r.BLOG}/`)){const e=this.currentPage.substring(`${r.BLOG}/`.length);return a`<blog-post-page slug="${e}"></blog-post-page>`}return a`<home-page></home-page>`}}}customElements.define("portfolio-app",i);class l extends e{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=t`
    :host {
      display: block;
      min-width: 0;
    }

    .card {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      min-width: 0;
      border: 1px solid var(--card-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      border-radius: var(--radius-lg, 24px);
      padding: var(--space-6, 24px);
      color: var(--color-text, #f8f6ff);
      background:
        linear-gradient(145deg, rgba(19, 16, 41, 0.94), rgba(8, 5, 18, 0.88)),
        radial-gradient(circle at 14% 0%, var(--card-glow, rgba(94, 252, 255, 0.12)), transparent 34%);
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34)), inset 0 1px 0 rgba(255, 255, 255, 0.07);
      transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        linear-gradient(90deg, var(--card-line, rgba(94, 252, 255, 0.28)), transparent 34%, transparent 68%, rgba(255, 77, 243, 0.18)),
        repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 0, rgba(255, 255, 255, 0.045) 1px, transparent 1px, transparent 6px);
      opacity: 0.35;
      mask-image: linear-gradient(#000, transparent 78%);
    }

    .card::after {
      content: "";
      position: absolute;
      left: var(--space-6, 24px);
      right: var(--space-6, 24px);
      bottom: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--card-line, var(--color-primary, #5efcff)), transparent);
      opacity: 0.8;
    }

    .card.hoverable:hover {
      transform: translateY(-4px);
      border-color: var(--card-line, var(--color-border-strong, rgba(94, 252, 255, 0.48)));
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34)), var(--shadow-glow, 0 0 34px rgba(255, 77, 243, 0.22));
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      --card-line: var(--color-primary, #5efcff);
      --card-border: rgba(94, 252, 255, 0.42);
      --card-glow: rgba(94, 252, 255, 0.18);
    }

    .card.secondary {
      --card-line: rgba(184, 146, 255, 0.72);
      --card-border: rgba(184, 146, 255, 0.30);
      --card-glow: rgba(184, 146, 255, 0.14);
    }

    .card.accent {
      --card-line: var(--color-accent, #ff4df3);
      --card-border: rgba(255, 77, 243, 0.38);
      --card-glow: rgba(255, 77, 243, 0.18);
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3, 12px);
      margin-bottom: var(--space-5, 20px);
    }

    .card-header > div {
      min-width: 0;
    }

    .card-icon {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      flex: 0 0 auto;
      border: 1px solid var(--card-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      border-radius: 15px;
      color: var(--card-line, var(--color-primary, #5efcff));
      background: rgba(255, 255, 255, 0.05);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.8rem;
      font-weight: 900;
      box-shadow: 0 0 18px color-mix(in srgb, var(--card-line, #5efcff) 22%, transparent);
    }

    .card-title {
      margin: 0;
      color: var(--color-text, #f8f6ff);
      font-family: var(--font-family-heading, sans-serif);
      font-size: clamp(1.2rem, 2vw, 1.65rem);
      font-weight: 900;
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-transform: uppercase;
      overflow-wrap: anywhere;
    }

    .card-subtitle {
      margin: 0.42rem 0 0;
      color: var(--color-text-muted, #a9a4ca);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.74rem;
      letter-spacing: 0.08em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .card-content {
      color: var(--color-text-muted, #a9a4ca);
    }

    ::slotted(*) {
      color: inherit;
    }
  `;constructor(){super(),this.title="",this.subtitle="",this.icon="",this.variant="default",this.hoverable=!1,this.clickable=!1}render(){const e=["card","default"!==this.variant?this.variant:"",this.hoverable?"hoverable":"",this.clickable?"clickable":""].filter(Boolean).join(" ");return a`
      <div class=${e}>
        ${this.title||this.icon?a`
          <div class="card-header">
            ${this.icon?a`<span class="card-icon">${this.icon}</span>`:""}
            <div>
              ${this.title?a`<h2 class="card-title">${this.title}</h2>`:""}
              ${this.subtitle?a`<p class="card-subtitle">${this.subtitle}</p>`:""}
            </div>
          </div>
        `:""}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("custom-card",l);class c extends e{createRenderRoot(){return this}render(){return a`
      <div class="page-stack">
        ${this._renderHero()}
        ${this._renderMetrics()}
        ${this._renderSkillDashboard()}
      </div>
    `}_renderHero(){return a`
      <section class="grid hero-layout">
        <div class="panel hero-console">
          <div class="panel-content">
            <div class="terminal-lines">
              <span class="terminal-line">booting maksim-larionov.portfolio</span>
              <span class="terminal-line">interface craft mode enabled</span>
            </div>

            <div class="hero-copy">
              <p class="eyebrow">senior frontend engineer</p>
              <h1 class="hero-title">Clean <span class="accent">Future</span> UI</h1>
              <p class="hero-text">
                I build resilient web platforms, design systems, and polished interfaces with a practical engineering mindset and focus on best DX and UX.
              </p>
              <div class="button-row">
                ${this._renderSocialButton("https://github.com/maxevilmind","View GitHub","secondary")}
                ${this._renderSocialButton("https://www.linkedin.com/in/larionov-m/","Connect on LinkedIn","primary")}
              </div>
            </div>

            <div>
              <div class="status-strip">
                <span class="status-pill green">web components</span>
                <span class="status-pill hot">design systems</span>
                <span class="status-pill">frontend platforms</span>
              </div>
              <div style="margin-top: var(--space-5);">
                <div class="progress-track"><span class="progress-fill" style="--value: 84%;"></span></div>
                <div class="progress-meta">
                  <span>portfolio redesign</span>
                  <span>84% done</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="panel panel-compact profile-card">
          <div class="panel-content">
            <div class="panel-header">
              <div>
                <p class="eyebrow">operator</p>
              <h2 class="panel-title">Maksim Larionov</h2>
              </div>
              <span class="panel-code">v8+</span>
            </div>
            <div class="signal-orb" aria-hidden="true"></div>
            <div class="mt-20 terminal-lines">
              <span class="terminal-line">location: Amsterdam area</span>
              <span class="terminal-line">role: staff engineer at ABN AMRO</span>
              <span class="terminal-line">focus: UI platforms, components, IoT</span>
            </div>
          </div>
        </aside>
      </section>
    `}_renderSocialButton(e,t,r){return a`
      <app-button href=${e} variant=${r} target="_blank">
        ${t}
      </app-button>
    `}_renderMetrics(){return a`
      <section class="metric-grid">
        ${this._renderMetric("8+","years building interfaces")}
        ${this._renderMetric("100%","web component native")}
        ${this._renderMetric("24/7","curiosity runtime")}
        ${this._renderMetric("1ms","performance mindset")}
      </section>
    `}_renderMetric(e,t){return a`
      <div class="metric-card">
        <div class="metric-value">${e}</div>
        <div class="metric-label">${t}</div>
      </div>
    `}_renderSkillDashboard(){return a`
      <section class="grid dashboard-grid">
        <custom-card title="Skill Tracker" subtitle="production calibrated" icon="01" variant="accent" hoverable>
          <div class="skill-list">
            ${this._renderSkill("JavaScript / TypeScript","96%")}
            ${this._renderSkill("Web Components","92%")}
            ${this._renderSkill("Design Systems","88%")}
            ${this._renderSkill("Mentoring","90%")}
          </div>
        </custom-card>

        <custom-card title="Interface Telemetry" subtitle="clean data surface" icon="02" variant="primary" hoverable>
          <div class="chart-card">
            <p>
              I like interfaces that make status visible without visual noise: clear contrast, rhythm, alignment, and just enough glow to make the UI feel alive.
            </p>
            <div class="bar-chart" role="img" aria-label="Interface telemetry chart">
              <span class="chart-bar" style="--value: 38%;" data-label="speed"></span>
              <span class="chart-bar" style="--value: 52%;" data-label="clarity"></span>
              <span class="chart-bar" style="--value: 46%;" data-label="motion"></span>
              <span class="chart-bar" style="--value: 78%;" data-label="system"></span>
              <span class="chart-bar" style="--value: 58%;" data-label="craft"></span>
              <span class="chart-bar" style="--value: 86%;" data-label="polish"></span>
            </div>
          </div>
        </custom-card>
      </section>
    `}_renderSkill(e,t){return a`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${t}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${t};"></span></div>
      </div>
    `}}customElements.define("home-page",c);var d=Object.freeze({__proto__:null,HomePage:c});
