import{i as e,x as i}from"./vendor-7603fedf.js";import"../index-0d82a843.js";class s extends e{createRenderRoot(){return this}render(){return i`
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
    `}_renderCurrentRole(){return i`
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
    `}_renderTechnicalStack(){return i`
      <custom-card title="Technical Stack" subtitle="frontend-heavy, system-aware" icon="TS" variant="accent" hoverable>
        <div class="skill-list">
          ${this._renderSkill("JavaScript / TypeScript","96%")}
          ${this._renderSkill("Lit / Web Components","92%")}
          ${this._renderSkill("Vue Ecosystem","84%")}
          ${this._renderSkill("Node.js / APIs","76%")}
          ${this._renderSkill("Hardware / IoT","68%")}
        </div>
      </custom-card>
    `}_renderSkill(e,s){return i`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${s}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${s};"></span></div>
      </div>
    `}_renderPrinciple(e,s,r){return i`
      <custom-card title=${s} subtitle="working principle" icon=${e} variant="secondary" hoverable>
        <p>${r}</p>
      </custom-card>
    `}_renderContributions(){return i`
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
    `}}customElements.define("about-page",s);export{s as AboutPage};
