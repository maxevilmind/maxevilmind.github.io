import{i as e,x as t}from"./vendor-7603fedf.js";import"../index-0d82a843.js";class i extends e{createRenderRoot(){return this}render(){return t`
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
    `}_renderProject(e){return t`
      <custom-card
        class="project-card-shell"
        title=${e.title}
        subtitle=${e.subtitle}
        icon=${e.code}
        variant=${e.variant}
        hoverable
        clickable>
        <div class="project-card-content">
          ${e.image?t`
            <img class="project-image" src=${e.image} alt=${e.title} width=${e.imageWidth} height=${e.imageHeight} loading="lazy" />
          `:""}
          <p>${e.description}</p>
          <div class="badge-list">
            ${e.tags.map((e=>t`<span class="badge">${e}</span>`))}
          </div>
          ${e.link?t`
            <div>
              <a href=${e.link} target="_blank" rel="noopener noreferrer" class="link-inline">View Project -&gt;</a>
            </div>
          `:""}
        </div>
      </custom-card>
    `}_renderCapability(e,i,a,s){return t`
      <div class="data-row">
        <span class="data-icon">${e}</span>
        <span>
          <span class="data-name">${i}</span><br>
          <span class="data-detail">${a}</span>
        </span>
        <span class="data-score">${s}</span>
      </div>
    `}get projects(){return[{code:"WC",title:"Web Components",subtitle:"Enterprise component system",description:"Maintaining and evolving reusable web component systems across enterprise applications, including documentation, testing, architecture, and design collaboration.",tags:["Web Components","TypeScript","Storybook","CI/CD"],link:null,variant:"primary"},{code:"SP",title:"SPA Platform",subtitle:"Enterprise application shell",description:"Contributed to a single-page application platform that hosts multiple micro-frontends with standardized architecture, authentication, and shared tooling.",tags:["JavaScript","Architecture","Authentication","Performance"],link:null,variant:"accent"},{code:"IoT",title:"Home IoT System",subtitle:"Personal automation lab",description:"Built home automation with Raspberry Pi, custom sensors, MQTT, open-source integrations, ESP32, and Arduino. The boring routines run themselves so there is more time to build things.",tags:["IoT","Node.js","MQTT","ESP32"],link:"https://github.com/maxevilmind/home-iot",variant:"secondary"},{code:"OS",title:"Open Source",subtitle:"Community contributions",description:"Small but meaningful contributions across JavaScript projects, documentation, testing, and tooling. Not everything has to be massive to be useful.",tags:["Open Source","JavaScript","Docs","Testing"],link:"https://github.com/maxevilmind",variant:"primary"},{code:"PF",title:"This Portfolio",subtitle:"Retro-futurist UI build",image:"assets/stats.png",imageWidth:733,imageHeight:612,description:"A lightweight web-components portfolio redesigned as a neon dashboard. It focuses on fast loading, responsive composition, and clean visual systems without a heavy framework.",tags:["Lit","CSS Tokens","Responsive UI","Rollup"],link:"https://github.com/maxevilmind/maxevilmind.github.io",variant:"accent"}]}}customElements.define("projects-page",i);export{i as ProjectsPage};
