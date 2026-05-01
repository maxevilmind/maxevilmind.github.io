import{i as e,a as t,x as r}from"./vendor-6907c12a.js";class AppButton extends e{static properties={href:{type:String},variant:{type:String},fullWidth:{type:Boolean,attribute:"full-width"},target:{type:String}};static styles=t`
    :host {
      display: inline-flex;
    }

    :host([hidden]) {
      display: none;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: 10px;
      border: 1px solid color-mix(in srgb, var(--color-border, #2b3f60) 70%, #0b1220);
      padding: 0.48rem 0.88rem;
      text-decoration: none;
      color: var(--button-fg, var(--color-secondary-foreground, #d9e7ff));
      cursor: pointer;
      background: var(--button-bg, var(--color-secondary, #1b2a44));
      transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;
    }

    .button:hover {
      background: var(--button-bg-hover, var(--color-secondary-hover, #223552));
    }

    .button.primary {
      --button-bg: var(--color-primary, #2d7ff9);
      --button-bg-hover: var(--color-primary-hover, #1f70e7);
      --button-fg: var(--color-primary-foreground, #f8fbff);
      border-color: color-mix(in srgb, var(--color-border, #2b3f60) 65%, #0b1220);
    }

    .button.secondary {
      --button-bg: var(--color-secondary, #1b2a44);
      --button-bg-hover: var(--color-secondary-hover, #223552);
      --button-fg: var(--color-secondary-foreground, #d9e7ff);
      border-color: color-mix(in srgb, var(--color-border, #2b3f60) 70%, #0b1220);
    }

    .button.ghost {
      --button-bg: transparent;
      --button-bg-hover: color-mix(in srgb, var(--color-surface-strong, #223552) 60%, transparent);
      --button-fg: var(--color-text, #eff5ff);
      border-color: transparent;
    }

    .button:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--color-primary-foreground, #f8fbff) 14%, transparent),
        0 1px 0 rgba(255, 255, 255, 0.04) inset;
    }

    .button.full {
      width: 100%;
    }
  `;constructor(){super(),this.href="",this.variant="secondary",this.fullWidth=!1,this.target="_self"}render(){const e=`button ${this.variant} ${this.fullWidth?"full":""}`;if(this.href){const t="_blank"===this.target?"noopener noreferrer":"";return r`<a class="${e}" href="${this.href}" target="${this.target}" rel="${t}"><slot></slot></a>`}return r`<button class="${e}" type="button"><slot></slot></button>`}}customElements.define("app-button",AppButton);class CustomCard extends e{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=t`
    :host {
      display: block;
    }

    .card {
      background: var(--color-surface, #152238);
      border: 1px solid var(--color-border, #2b3f60);
      border-radius: var(--radius-md, 12px);
      padding: var(--space-6, 24px);
      transition: all 0.2s ease-in-out;
    }

    .card.hoverable:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(7, 10, 18, 0.25));
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      background: var(--color-primary, #2d7ff9);
      border-color: transparent;
    }

    .card.secondary {
      background: var(--color-bg-muted, #1b2940);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .card-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: currentColor;
    }

    .card-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--color-text, #eff5ff);
      margin: 0;
    }

    .card-subtitle {
      font-size: 1rem;
      color: var(--color-text-muted, #b9c7dd);
      margin-top: 0.25rem;
    }

    .card-content {
      color: var(--color-text-muted, #b9c7dd);
    }

    ::slotted(*) {
      color: var(--color-text-muted, #b9c7dd);
    }
  `;constructor(){super(),this.title="",this.subtitle="",this.icon="",this.variant="default",this.hoverable=!1,this.clickable=!1}render(){const e=["card","default"!==this.variant?this.variant:"",this.hoverable?"hoverable":"",this.clickable?"clickable":""].filter(Boolean).join(" ");return r`
      <div class="${e}">
        ${this.title||this.icon?r`
          <div class="card-header">
            ${this.icon?r`<span class="card-icon">${this.icon}</span>`:""}
            <div>
              ${this.title?r`<h2 class="card-title">${this.title}</h2>`:""}
              ${this.subtitle?r`<p class="card-subtitle">${this.subtitle}</p>`:""}
            </div>
          </div>
        `:""}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("custom-card",CustomCard);customElements.define("home-page",class HomePage extends e{createRenderRoot(){return this}render(){return r`
      <div class="page-stack">
        ${this._renderHero()}
        ${this._renderFeatureCards()}
      </div>
    `}_renderHero(){return r`
      <section class="page-stack" style="padding-block: var(--space-12); gap: var(--space-4);">
        <h1 class="hero-title">
          Senior Software Engineer
        </h1>
        <p class="hero-text" style="font-size:1.125rem;">
          Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
          With 7+ years of experience in building scalable applications and mentoring teams.
        </p>
        <div class="button-row">
          ${this._renderSocialButton("https://github.com/maxevilmind","View GitHub","secondary")}
          ${this._renderSocialButton("https://www.linkedin.com/in/maxevilmind","Connect on LinkedIn","primary")}
        </div>
      </section>
    `}_renderSocialButton(e,t,o){return r`
      <app-button href="${e}" variant="${o}" target="_blank">
        ${t}
      </app-button>
    `}_renderFeatureCards(){return r`
      <section class="grid grid-2">
        <custom-card title="Expertise" hoverable>
          <ul class="list">
            <li>• JavaScript/TypeScript Development</li>
            <li>• Single Page Applications</li>
            <li>• Cross-team Collaboration</li>
            <li>• Technical Mentoring</li>
            <li>• Complex Problem Solving</li>
          </ul>
        </custom-card>

        <custom-card title="Current Focus" hoverable>
          <ul class="list">
            <li>• Building SPA Platform at ING</li>
            <li>• Building and maintaining UI components library at ING</li>
            <li>• Leadership</li>
            <li>• Open Source Contributions at Home and ING</li>
            <li>• IoT Device Development at Home</li>
          </ul>
        </custom-card>
      </section>
    `}});customElements.define("projects-page",class ProjectsPage extends e{createRenderRoot(){return this}render(){return r`
      <div class="page-stack">
        <h1 class="hero-title">Projects</h1>
        <p>
          A selection of projects I've worked on throughout my career and personal development.
        </p>
        
        <div class="grid grid-2">
          ${this._renderProjects()}
        </div>
      </div>
    `}_renderProjects(){return this.projects.map((e=>r`
      <custom-card 
        title="${e.title}" 
        subtitle="${e.subtitle}"
        hoverable 
        clickable>
        <div class="page-stack" style="gap: var(--space-4);">
          ${e.image?r`
            <img src="${e.image}" alt="${e.title}" style="width:100%;border-radius: var(--radius-sm);border:1px solid var(--color-border);" />
          `:""}
          <p>${e.description}</p>
          <div class="badge-list">
            ${e.tags.map((e=>r`
              <span class="badge">${e}</span>
            `))}
          </div>
          ${e.link?r`
            <div>
              <a 
                href="${e.link}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="link-inline">
                View Project →
              </a>
            </div>
          `:""}
        </div>
      </custom-card>
    `))}get projects(){return[{title:"Web Components",subtitle:"Enterprise Component System",description:"Maintaining a library of web components used across multiple applications at ING. Contributed to the development of the library, documentation, testing, design decisions, and more.",tags:["Web Components","TypeScript","Storybook","CI/CD"],link:null},{title:"SPA Platform",subtitle:"Enterprise Application",description:"Contributed to the development of SPA platform that hosts numerous micro-frontends with standardized architecture and tools.",tags:["JavaScript","Architecture","Authentication","Performance"],link:null},{title:"Home IoT System",subtitle:"Personal Project",description:"Created a home automation system using Raspberry Pi, custom sensors, and a web dashboard. Contributed to the development of the open-source integrations. This gave me some experience with hardware and low-level programming. Including esp32 and arduino. Most of the boring routines at my home are automated to a point where I don't even need to think about them. This leaves me with some time to code, play guitar, spend time with my gf and play games, and run. And cycle. And cook. And all the other hobbies.",tags:["IoT","Node.js","MQTT","React"],link:"https://github.com/maxevilmind/home-iot"},{title:"Open Source Contributions",subtitle:"Community Work",description:"I sometimes contribute to open source projects. You can find my contributions on GitHub. It's not much, but it's something.",tags:["Open Source","JavaScript","Documentation","Testing"],link:"https://github.com/maxevilmind"},{title:"This Portfolio",subtitle:"Fun Project",image:"/assets/stats.png",description:"This portfolio is a fun project that I do to showcase my work and share my thoughts. It is blazing fast thanks to web components and lion components (opensource components library that I contributed to a just little bit as well). It weights next to nothing, loads in 140ms, and is fully responsive. It is also fully open source, so you can see the code and even host your own copy!",tags:["Open Source","JavaScript","Documentation","Testing"],link:"https://github.com/maxevilmind"}]}});customElements.define("about-page",class AboutPage extends e{createRenderRoot(){return this}render(){return r`
      <div class="page-stack">
        ${this._renderAboutMe()}
        ${this._renderCurrentRole()}
        ${this._renderTechnicalStack()}
        ${this._renderContributions()}
      </div>
    `}_renderAboutMe(){return r`
      <custom-card title="About Me" subtitle="Senior Software Engineer at ING" hoverable>
        <div class="page-stack" style="gap: var(--space-4);">
          <p>
            I'm a Senior Software Engineer with 7+ years of experience in JavaScript development, 
            currently working at ING in the Amsterdam Area. I specialize in building scalable 
            applications and solving complex problems.
          </p>
          <p>
            My journey in software development started at the American University of Central Asia, 
            where I developed a passion for algorithm programming, IoT device development, hardware and many other things.
          </p>
        </div>
      </custom-card>
    `}_renderCurrentRole(){return r`
      <custom-card title="Current Role" subtitle="ING - Senior Software Engineer" hoverable>
        <div class="page-stack" style="gap: var(--space-4);">
          <p>
            At ING, I'm contributing to a single-page application platform that serves as the 
            foundation for various banking services. My role involves:
          </p>
          <ul class="list">
            <li>Cross-team collaboration and technical leadership</li>
            <li>Mentoring junior developers and sharing knowledge</li>
            <li>Implementing best practices and architectural decisions</li>
            <li>Contributing to the platform's growth and evolution</li>
          </ul>
        </div>
      </custom-card>
    `}_renderTechnicalStack(){return r`
      <custom-card title="Technical Stack" hoverable>
        <div class="grid grid-2">
          <div>
            <h3 style="margin-bottom: var(--space-2);">Frontend</h3>
            <ul class="list">
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Web Components</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 style="margin-bottom: var(--space-2);">Backend</h3>
            <ul class="list">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </custom-card>
    `}_renderContributions(){return r`
      <custom-card title="Contributions" hoverable>
        <div class="page-stack" style="gap: var(--space-4);">
          <p>
            I'm actively contributing to the open-source community and sharing my knowledge 
            through various platforms. Check out my contributions on 
            <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" 
               class="link-inline">GitHub</a>.
          </p>
        </div>
      </custom-card>
    `}});customElements.define("contact-page",class ContactPage extends e{createRenderRoot(){return this}render(){return r`
      <div class="page-stack">
        <custom-card title="Connect With Me" hoverable>
          <div class="page-stack" style="gap: var(--space-6);">
            <p style="font-size: 1.125rem;">
              Feel free to reach out to me through my professional profiles:
            </p>
            
            <div class="social-links">
              ${this._renderSocialLink("https://github.com/maxevilmind","GitHub","secondary",this._getGitHubIcon())}
              
              ${this._renderSocialLink("https://www.linkedin.com/in/maxevilmind","LinkedIn","primary",this._getLinkedInIcon())}
            </div>
          </div>
        </custom-card>
      </div>
    `}_renderSocialLink(e,t,o,i){return r`
      <app-button href="${e}" target="_blank" variant="${o}">
         ${i}
         ${t}
       </app-button>
    `}_getGitHubIcon(){return r`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `}_getLinkedInIcon(){return r`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    `}});
//# sourceMappingURL=pages-24fc057c.js.map
