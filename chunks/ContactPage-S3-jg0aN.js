import{i as e,b as t}from"./vendor-DbZKYTSE.js";import"../index-BFCfTe5F.js";class s extends e{createRenderRoot(){return this}render(){return t`
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
    `}_renderSignal(e,s){return t`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${s}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${s};"></span></div>
      </div>
    `}_renderSocialLink(e,s,n,i){return t`
      <app-button href=${e} target="_blank" variant=${n}>
        ${i}
        ${s}
      </app-button>
    `}_getGitHubIcon(){return t`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `}_getLinkedInIcon(){return t`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    `}}customElements.define("contact-page",s);export{s as ContactPage};
