import { LitElement, html } from 'lit';
import '../ui/CustomCard.js';

/**
 * Projects page component displaying project information
 */
export class ProjectsPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="space-y-8">
        <h1 class="text-4xl font-bold">Projects</h1>
        <p class="text-gray-300 mb-8">
          A selection of projects I've worked on throughout my career and personal development.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${this._renderProjects()}
        </div>
      </div>
    `;
  }

  _renderProjects() {
    return this.projects.map(project => html`
      <custom-card 
        title="${project.title}" 
        subtitle="${project.subtitle}"
        hoverable 
        clickable>
        <div class="space-y-4">
          ${project.image ? html`
            <img src="${project.image}" alt="${project.title}" class="w-full rounded-lg shadow-lg" />
          ` : ''}
          <p>${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => html`
              <span class="px-2 py-1 bg-gray-700 text-xs rounded-full">${tag}</span>
            `)}
          </div>
          ${project.link ? html`
            <div class="mt-4">
              <a 
                href="${project.link}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </a>
            </div>
          ` : ''}
        </div>
      </custom-card>
    `);
  }

  get projects() {
    return [
      {
        title: 'Web Components',
        subtitle: 'Enterprise Component System',
        description: 'Maintaining a library of web components used across multiple applications at ING. Contributed to the development of the library, documentation, testing, design decisions, and more.',
        tags: ['Web Components', 'TypeScript', 'Storybook', 'CI/CD'],
        link: null
      },
      {
        title: 'SPA Platform',
        subtitle: 'Enterprise Application',
        description: 'Contributed to the development of SPA platform that hosts numerous micro-frontends with standardized architecture and tools.',
        tags: ['JavaScript', 'Architecture', 'Authentication', 'Performance'],
        link: null
      },
      {
        title: 'Home IoT System',
        subtitle: 'Personal Project',
        description: 'Created a home automation system using Raspberry Pi, custom sensors, and a web dashboard. Contributed to the development of the open-source integrations. This gave me some experience with hardware and low-level programming. Including esp32 and arduino. Most of the boring routines at my home are automated to a point where I don\'t even need to think about them. This leaves me with some time to code, play guitar, spend time with my gf and play games, and run. And cycle. And cook. And all the other hobbies.',
        tags: ['IoT', 'Node.js', 'MQTT', 'React'],
        link: 'https://github.com/maxevilmind/home-iot'
      },
      {
        title: 'Open Source Contributions',
        subtitle: 'Community Work',
        description: 'I sometimes contribute to open source projects. You can find my contributions on GitHub. It\'s not much, but it\'s something.',
        tags: ['Open Source', 'JavaScript', 'Documentation', 'Testing'],
        link: 'https://github.com/maxevilmind'
      },
      {
        title: 'This Portfolio',
        subtitle: 'Fun Project',
        image: '/assets/stats.png',
        description: 'This portfolio is a fun project that I do to showcase my work and share my thoughts. It is blazing fast thanks to web components and lion components (opensource components library that I contributed to a just little bit as well). It weights next to nothing, loads in 140ms, and is fully responsive. It is also fully open source, so you can see the code and even host your own copy!',
        tags: ['Open Source', 'JavaScript', 'Documentation', 'Testing'],
        link: 'https://github.com/maxevilmind'
      }
    ];
  }
}

customElements.define('projects-page', ProjectsPage); 