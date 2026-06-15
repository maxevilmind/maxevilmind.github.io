import{i as e,b as r}from"./vendor-DbZKYTSE.js";import"../index-DUaIh2hd.js";class i extends e{createRenderRoot(){return this}render(){return r`
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

        <section class="grid grid-3">
          ${this._renderCurrentRole()}
          ${this._renderPastRole()}
          ${this._renderTechnicalStack()}
        </section>

        <section class="grid grid-3">
          ${this._renderPrinciple("01","Calm Complexity","Turn messy systems into understandable flows, components, and platform boundaries.")}
          ${this._renderPrinciple("02","Visible Quality","Use spacing, typography, feedback, and motion to make quality immediately visible.")}
          ${this._renderPrinciple("03","Pragmatic","Prefer small, correct changes and systems that teams can actually maintain.")}
        </section>

        ${this._renderContributions()}
      </div>
    `}_renderCurrentRole(){return this._renderRoleCard("Current Role","ABN AMRO / staff engineer (Current)","ABN","primary",r`
        <div class="section-stack">
          <p>
            I work in core transactions grid currently focusing on DX and initiatives to make devs more productive.
          </p>
          <ul class="list">
            <li>Here will be the list of core points I worked on.</li>
          </ul>
        </div>
      `)}_renderPastRole(){return this._renderRoleCard("Past Role","ING / senior frontend engineer (Feb 2019 - May 2026)","ING","secondary",r`
        <div class="section-stack">
          <p>
            I worked on frontend platform and UI engineering for banking services. The work spans shared architecture, component libraries, developer tooling, microfrontend shell hosting numerous applications, developer experience, and cross-team decision making.
          </p>
          <ul class="list">
            <li>Cross-team collaboration and technical leadership</li>
            <li>Mentoring, reviews, and knowledge sharing</li>
            <li>Design system and web component quality</li>
            <li>Built mature frontend platform</li>
            <li>Microfrontends</li>
            <li>Component libraries</li>
          </ul>
        </div>
      `)}_renderRoleCard(e,i,n,s,t){return r`
      <custom-card title=${e} subtitle=${i} icon=${n} variant=${s} hoverable>
        ${t}
      </custom-card>
    `}_renderTechnicalStack(){return r`
      <custom-card title="Technical Stack" subtitle="frontend-heavy, system-aware" icon="TS" variant="accent" hoverable>
        <div class="skill-list">
          ${this._renderSkill("JavaScript / TypeScript","96%")}
          ${this._renderSkill("Lit / Web Components","92%")}
          ${this._renderSkill("Vue Ecosystem","84%")}
          ${this._renderSkill("Node.js / APIs","76%")}
          ${this._renderSkill("Hardware / IoT","68%")}
        </div>
      </custom-card>
    `}_renderSkill(e,i){return r`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${i}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${i};"></span></div>
      </div>
    `}_renderPrinciple(e,i,n){return r`
      <custom-card title=${i} subtitle="working principle" icon=${e} variant="secondary" hoverable>
        <p>${n}</p>
      </custom-card>
    `}_renderContributions(){return r`
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
    `}}customElements.define("about-page",i);export{i as AboutPage};
