import{i as e,a as t,x as a}from"./vendor-8fc737ca.js";class AppButton extends e{static properties={href:{type:String},variant:{type:String},fullWidth:{type:Boolean,attribute:"full-width"},target:{type:String}};static styles=t`
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
  `;constructor(){super(),this.href="",this.variant="secondary",this.fullWidth=!1,this.target="_self"}render(){const e=`button ${this.variant} ${this.fullWidth?"full":""}`;if(this.href){const t="_blank"===this.target?"noopener noreferrer":"";return a`<a class=${e} href=${this.href} target=${this.target} rel=${t}><slot></slot></a>`}return a`<button class=${e} type="button"><slot></slot></button>`}}customElements.define("app-button",AppButton);class CustomCard extends e{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=t`
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
    `}}customElements.define("custom-card",CustomCard);customElements.define("home-page",class HomePage extends e{createRenderRoot(){return this}render(){return a`
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
                I build resilient web platforms, design systems, and polished interfaces with a practical engineering mindset. This site is now styled as a retro-futurist control room: sharp hierarchy, neon feedback, and clean dashboard structure.
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
                <span class="status-pill">platform work</span>
              </div>
              <div style="margin-top: var(--space-5);">
                <div class="progress-track"><span class="progress-fill" style="--value: 84%;"></span></div>
                <div class="progress-meta">
                  <span>portfolio redesign</span>
                  <span>84% signal strength</span>
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
        ${this._renderMetric("140ms","performance mindset")}
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
            <div class="bar-chart" aria-label="Interface telemetry chart">
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
    `}});customElements.define("projects-page",class ProjectsPage extends e{createRenderRoot(){return this}render(){return a`
      <div class="page-stack">
        <section class="panel">
          <div class="panel-content section-stack">
            <p class="eyebrow">project archive</p>
            <h1 class="section-title">Selected <span class="accent">Builds</span></h1>
            <p class="hero-text">
              A mix of enterprise platform work, component systems, hobby hardware, and this portfolio experiment. The goal is consistent: make complex systems feel understandable and usable.
            </p>
          </div>
        </section>

        <section class="project-grid">
          ${this.projects.map((e=>this._renderProject(e)))}
        </section>

        <section class="grid dashboard-grid">
          <custom-card title="Capability Matrix" subtitle="current operating profile" icon="CM" variant="primary" hoverable>
            <div class="data-table">
              ${this._renderCapability("DS","Design Systems","tokens, primitives, documentation","A+")}
              ${this._renderCapability("PF","Platform Frontend","micro-frontends, routing, scale","A")}
              ${this._renderCapability("UX","Interaction Craft","motion, feedback, responsive UI","A")}
              ${this._renderCapability("HW","Hardware Curiosity","ESP32, Raspberry Pi, LoRa","B+")}
            </div>
          </custom-card>

          <custom-card title="Build Principles" subtitle="how I prefer to ship" icon="BP" variant="accent" hoverable>
            <ul class="list">
              <li>Prioritize clean, maintainable architecture and the best possible developer experience.</li>
              <li>Use strong defaults before inventing abstractions.</li>
              <li>Make state, loading, and failure visible in the interface.</li>
              <li>Keep components small, composable, and readable.</li>
            </ul>
          </custom-card>
        </section>
      </div>
    `}_renderProject(e){return a`
      <custom-card
        class="project-card-shell"
        title=${e.title}
        subtitle=${e.subtitle}
        icon=${e.code}
        variant=${e.variant}
        hoverable
        clickable>
        <div class="project-card-content">
          ${e.image?a`
            <img class="project-image" src=${e.image} alt=${e.title} loading="lazy" />
          `:""}
          <p>${e.description}</p>
          <div class="badge-list">
            ${e.tags.map((e=>a`<span class="badge">${e}</span>`))}
          </div>
          ${e.link?a`
            <div>
              <a href=${e.link} target="_blank" rel="noopener noreferrer" class="link-inline">View Project -&gt;</a>
            </div>
          `:""}
        </div>
      </custom-card>
    `}_renderCapability(e,t,r,s){return a`
      <div class="data-row">
        <span class="data-icon">${e}</span>
        <span>
          <span class="data-name">${t}</span><br>
          <span class="data-detail">${r}</span>
        </span>
        <span class="data-score">${s}</span>
      </div>
    `}get projects(){return[{code:"WC",title:"Web Components",subtitle:"Enterprise component system",description:"Maintaining and evolving reusable web component systems across enterprise applications, including documentation, testing, architecture, and design collaboration.",tags:["Web Components","TypeScript","Storybook","CI/CD"],link:null,variant:"primary"},{code:"SP",title:"SPA Platform",subtitle:"Enterprise application shell",description:"Contributed to a single-page application platform that hosts multiple micro-frontends with standardized architecture, authentication, and shared tooling.",tags:["JavaScript","Architecture","Authentication","Performance"],link:null,variant:"accent"},{code:"IoT",title:"Home IoT System",subtitle:"Personal automation lab",description:"Built home automation with Raspberry Pi, custom sensors, MQTT, open-source integrations, ESP32, and Arduino. The boring routines run themselves so there is more time to build things.",tags:["IoT","Node.js","MQTT","ESP32"],link:"https://github.com/maxevilmind/home-iot",variant:"secondary"},{code:"OS",title:"Open Source",subtitle:"Community contributions",description:"Small but meaningful contributions across JavaScript projects, documentation, testing, and tooling. Not everything has to be massive to be useful.",tags:["Open Source","JavaScript","Docs","Testing"],link:"https://github.com/maxevilmind",variant:"primary"},{code:"PF",title:"This Portfolio",subtitle:"Retro-futurist UI build",image:"assets/stats.png",description:"A lightweight web-components portfolio redesigned as a neon dashboard. It focuses on fast loading, responsive composition, and clean visual systems without a heavy framework.",tags:["Lit","CSS Tokens","Responsive UI","Rollup"],link:"https://github.com/maxevilmind/maxevilmind.github.io",variant:"accent"}]}});customElements.define("about-page",class AboutPage extends e{createRenderRoot(){return this}render(){return a`
      <div class="page-stack">
        <section class="panel">
          <div class="panel-content section-stack">
            <p class="eyebrow">operator dossier</p>
            <h1 class="section-title">Engineer With <span class="accent">Taste</span></h1>
            <p class="hero-text">
              I am a Staff Engineer at ABN AMRO with 8+ years of JavaScript experience in the Amsterdam area. I enjoy the space where reliable engineering meets crisp, practical UI craft.
            </p>
          </div>
        </section>

        <section class="grid dashboard-grid">
          ${this._renderCurrentRole()}
          ${this._renderTechnicalStack()}
        </section>

        <section class="grid grid-3">
          ${this._renderPrinciple("01","Calm Complexity","Turn messy systems into understandable flows, components, and platform boundaries.")}
          ${this._renderPrinciple("02","Visible Quality","Use spacing, typography, feedback, and motion to make quality immediately visible.")}
          ${this._renderPrinciple("03","Pragmatic Delivery","Prefer small, correct changes and systems that teams can actually maintain.")}
        </section>

        ${this._renderContributions()}
      </div>
    `}_renderCurrentRole(){return a`
      <custom-card title="Current Role" subtitle="ABN AMRO / staff engineer" icon="ABN" variant="primary" hoverable>
        <div class="section-stack">
          <p>
            I work on frontend platform and UI engineering for banking services. The work spans shared architecture, reusable UI, developer experience, and cross-team decision making.
          </p>
          <ul class="list">
            <li>Cross-team collaboration and technical leadership</li>
            <li>Mentoring, reviews, and knowledge sharing</li>
            <li>Design system and web component quality</li>
            <li>Platform evolution with performance in mind</li>
          </ul>
        </div>
      </custom-card>
    `}_renderTechnicalStack(){return a`
      <custom-card title="Technical Stack" subtitle="frontend-heavy, system-aware" icon="TS" variant="accent" hoverable>
        <div class="skill-list">
          ${this._renderSkill("JavaScript / TypeScript","96%")}
          ${this._renderSkill("Lit / Web Components","92%")}
          ${this._renderSkill("Vue Ecosystem","84%")}
          ${this._renderSkill("Node.js / APIs","76%")}
          ${this._renderSkill("Hardware / IoT","68%")}
        </div>
      </custom-card>
    `}_renderSkill(e,t){return a`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${t}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${t};"></span></div>
      </div>
    `}_renderPrinciple(e,t,r){return a`
      <custom-card title=${t} subtitle="working principle" icon=${e} variant="secondary" hoverable>
        <p>${r}</p>
      </custom-card>
    `}_renderContributions(){return a`
      <section class="panel panel-compact">
        <div class="panel-content">
          <div class="panel-header">
            <div>
              <p class="eyebrow">outside work</p>
              <h2 class="panel-title">Hardware, open source, and experiments</h2>
            </div>
            <span class="panel-code">always tinkering</span>
          </div>
          <p class="hero-text">
            Outside work I build home automation, experiment with ESP32, Arduino, Raspberry Pi, local AI tools, and LoRa communication systems. I also contribute to open source when I can. You can find the public bits on <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" class="link-inline">GitHub</a>.
          </p>
        </div>
      </section>
    `}});customElements.define("contact-page",class ContactPage extends e{createRenderRoot(){return this}render(){return a`
      <div class="page-stack">
        <section class="panel">
          <div class="panel-content section-stack">
            <p class="eyebrow">open channel</p>
            <h1 class="section-title">Start A <span class="accent">Signal</span></h1>
            <p class="hero-text">
              Reach out for frontend engineering, component systems, platform work, or just to compare notes on hardware, automation, and odd radio experiments.
            </p>
          </div>
        </section>

        <section class="contact-grid">
          <custom-card title="Professional Links" subtitle="verified routes" icon="@" variant="primary" hoverable>
            <div class="contact-card">
              <p class="contact-callout">
                I am easiest to reach through LinkedIn for professional conversations and GitHub for public project context.
              </p>
              <div class="social-links">
                ${this._renderSocialLink("https://github.com/maxevilmind","GitHub","secondary",this._getGitHubIcon())}
                ${this._renderSocialLink("https://www.linkedin.com/in/larionov-m/","LinkedIn","primary",this._getLinkedInIcon())}
              </div>
            </div>
          </custom-card>

          <custom-card title="Response Profile" subtitle="how I collaborate" icon="RX" variant="accent" hoverable>
            <div class="skill-list">
              ${this._renderSignal("Frontend systems","94%")}
              ${this._renderSignal("UI craft","90%")}
              ${this._renderSignal("Architecture discussion","88%")}
              ${this._renderSignal("Random hardware chat","100%")}
            </div>
          </custom-card>
        </section>
      </div>
    `}_renderSignal(e,t){return a`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${t}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${t};"></span></div>
      </div>
    `}_renderSocialLink(e,t,r,s){return a`
      <app-button href=${e} target="_blank" variant=${r}>
        ${s}
        ${t}
      </app-button>
    `}_getGitHubIcon(){return a`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `}_getLinkedInIcon(){return a`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    `}});
//# sourceMappingURL=pages-b1ec78da.js.map
