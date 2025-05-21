import{i as e,a as t,x as i}from"./vendor-6907c12a.js";class CustomCard extends e{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=t`
    :host {
      display: block;
    }

    .card {
      background-color: rgb(31, 41, 55); /* bg-gray-800 */
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: all 0.2s ease-in-out;
    }

    .card.hoverable:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      background-color: rgb(37, 99, 235); /* bg-blue-600 */
    }

    .card.secondary {
      background-color: rgb(79, 70, 229); /* bg-indigo-600 */
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
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
    }

    .card-subtitle {
      font-size: 1rem;
      color: rgb(209, 213, 219); /* text-gray-300 */
      margin-top: 0.25rem;
    }

    .card-content {
      color: rgb(209, 213, 219); /* text-gray-300 */
    }

    ::slotted(*) {
      color: rgb(209, 213, 219); /* text-gray-300 */
    }
  `;constructor(){super(),this.title="",this.subtitle="",this.icon="",this.variant="default",this.hoverable=!1,this.clickable=!1}render(){const e=["card","default"!==this.variant?this.variant:"",this.hoverable?"hoverable":"",this.clickable?"clickable":""].filter(Boolean).join(" ");return i`
      <div class="${e}">
        ${this.title||this.icon?i`
          <div class="card-header">
            ${this.icon?i`<span class="card-icon">${this.icon}</span>`:""}
            <div>
              ${this.title?i`<h2 class="card-title">${this.title}</h2>`:""}
              ${this.subtitle?i`<p class="card-subtitle">${this.subtitle}</p>`:""}
            </div>
          </div>
        `:""}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("custom-card",CustomCard);customElements.define("home-page",class HomePage extends e{createRenderRoot(){return this}render(){return i`
      <div class="space-y-8">
        ${this._renderHero()}
        ${this._renderFeatureCards()}
      </div>
    `}_renderHero(){return i`
      <section class="text-center space-y-4">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Senior Software Engineer
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
          With 7+ years of experience in building scalable applications and mentoring teams.
        </p>
        <div class="flex justify-center gap-4 mt-6">
          ${this._renderSocialButton("https://github.com/maxevilmind","View GitHub","bg-gray-800 hover:bg-gray-700")}
          ${this._renderSocialButton("https://www.linkedin.com/in/maxevilmind","Connect on LinkedIn","bg-blue-600 hover:bg-blue-500")}
        </div>
      </section>
    `}_renderSocialButton(e,t,r){return i`
      <a href="${e}" target="_blank" rel="noopener noreferrer" 
         class="px-6 py-3 ${r} rounded-lg transition-colors">
        ${t}
      </a>
    `}_renderFeatureCards(){return i`
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <custom-card title="Expertise" hoverable>
          <ul class="space-y-2">
            <li>• JavaScript/TypeScript Development</li>
            <li>• Single Page Applications</li>
            <li>• Cross-team Collaboration</li>
            <li>• Technical Mentoring</li>
            <li>• Complex Problem Solving</li>
          </ul>
        </custom-card>

        <custom-card title="Current Focus" hoverable>
          <ul class="space-y-2">
            <li>• Building SPA Platform at ING</li>
            <li>• Building and maintaining UI components library at ING</li>
            <li>• Leadership</li>
            <li>• Open Source Contributions at Home and ING</li>
            <li>• IoT Device Development at Home</li>
          </ul>
        </custom-card>
      </section>
    `}});customElements.define("projects-page",class ProjectsPage extends e{createRenderRoot(){return this}render(){return i`
      <div class="space-y-8">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p class="text-gray-300 mb-8">
          A selection of projects I've worked on throughout my career and personal development.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${this._renderProjects()}
        </div>
      </div>
    `}_renderProjects(){return this.projects.map((e=>i`
      <custom-card 
        title="${e.title}" 
        subtitle="${e.subtitle}"
        hoverable 
        clickable>
        <div class="space-y-4">
          <p>${e.description}</p>
          <div class="flex flex-wrap gap-2">
            ${e.tags.map((e=>i`
              <span class="px-2 py-1 bg-gray-700 text-xs rounded-full">${e}</span>
            `))}
          </div>
          ${e.link?i`
            <div class="mt-4">
              <a 
                href="${e.link}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>
          `:""}
        </div>
      </custom-card>
    `))}get projects(){return[{title:"ING Web Components Library",subtitle:"Enterprise Component System",description:"Led the development of a company-wide web components library used across multiple applications at ING.",tags:["Web Components","TypeScript","Storybook","CI/CD"],link:null},{title:"SPA Platform",subtitle:"Enterprise Application Framework",description:"Designed and implemented a platform for building single-page applications with standardized architecture and tools.",tags:["JavaScript","Architecture","Authentication","Performance"],link:null},{title:"Home IoT System",subtitle:"Personal Project",description:"Created a home automation system using Raspberry Pi, custom sensors, and a web dashboard.",tags:["IoT","Node.js","MQTT","React"],link:"https://github.com/maxevilmind/home-iot"},{title:"Open Source Contributions",subtitle:"Community Work",description:"Active contributor to several open source projects in the JavaScript ecosystem.",tags:["Open Source","JavaScript","Documentation","Testing"],link:"https://github.com/maxevilmind"}]}});customElements.define("about-page",class AboutPage extends e{createRenderRoot(){return this}render(){return i`
      <div class="max-w-4xl mx-auto space-y-8">
        ${this._renderAboutMe()}
        ${this._renderCurrentRole()}
        ${this._renderTechnicalStack()}
        ${this._renderContributions()}
      </div>
    `}_renderAboutMe(){return i`
      <custom-card title="About Me" subtitle="Senior Software Engineer at ING" hoverable>
        <div class="space-y-4">
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
    `}_renderCurrentRole(){return i`
      <custom-card title="Current Role" subtitle="ING - Senior Software Engineer" hoverable>
        <div class="space-y-4">
          <p>
            At ING, I'm contributing to a single-page application platform that serves as the 
            foundation for various banking services. My role involves:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Cross-team collaboration and technical leadership</li>
            <li>Mentoring junior developers and sharing knowledge</li>
            <li>Implementing best practices and architectural decisions</li>
            <li>Contributing to the platform's growth and evolution</li>
          </ul>
        </div>
      </custom-card>
    `}_renderTechnicalStack(){return i`
      <custom-card title="Technical Stack" hoverable>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold mb-2">Frontend</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>Web Components</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Backend</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </custom-card>
    `}_renderContributions(){return i`
      <custom-card title="Contributions" hoverable>
        <div class="space-y-4">
          <p>
            I'm actively contributing to the open-source community and sharing my knowledge 
            through various platforms. Check out my contributions on 
            <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" 
               class="text-blue-400 hover:text-blue-300">GitHub</a>.
          </p>
        </div>
      </custom-card>
    `}});customElements.define("contact-page",class ContactPage extends e{createRenderRoot(){return this}render(){return i`
      <div class="max-w-4xl mx-auto space-y-8">
        <custom-card title="Connect With Me" hoverable>
          <div class="space-y-6">
            <p class="text-lg">
              Feel free to reach out to me through my professional profiles:
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              ${this._renderSocialLink("https://github.com/maxevilmind","GitHub","bg-gray-800 hover:bg-gray-700",this._getGitHubIcon())}
              
              ${this._renderSocialLink("https://www.linkedin.com/in/maxevilmind","LinkedIn","bg-blue-600 hover:bg-blue-500",this._getLinkedInIcon())}
            </div>
          </div>
        </custom-card>
      </div>
    `}_renderSocialLink(e,t,r,a){return i`
      <a href="${e}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="flex items-center gap-3 px-6 py-4 ${r} rounded-lg transition-colors">
        ${a}
        <span>${t}</span>
      </a>
    `}_getGitHubIcon(){return i`
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    `}_getLinkedInIcon(){return i`
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    `}});
//# sourceMappingURL=pages-d8982caa.js.map
