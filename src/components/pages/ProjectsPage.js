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
        title: 'ING Web Components Library',
        subtitle: 'Enterprise Component System',
        description: 'Led the development of a company-wide web components library used across multiple applications at ING.',
        tags: ['Web Components', 'TypeScript', 'Storybook', 'CI/CD'],
        link: null
      },
      {
        title: 'SPA Platform',
        subtitle: 'Enterprise Application Framework',
        description: 'Designed and implemented a platform for building single-page applications with standardized architecture and tools.',
        tags: ['JavaScript', 'Architecture', 'Authentication', 'Performance'],
        link: null
      },
      {
        title: 'Home IoT System',
        subtitle: 'Personal Project',
        description: 'Created a home automation system using Raspberry Pi, custom sensors, and a web dashboard.',
        tags: ['IoT', 'Node.js', 'MQTT', 'React'],
        link: 'https://github.com/maxevilmind/home-iot'
      },
      {
        title: 'Open Source Contributions',
        subtitle: 'Community Work',
        description: 'Active contributor to several open source projects in the JavaScript ecosystem.',
        tags: ['Open Source', 'JavaScript', 'Documentation', 'Testing'],
        link: 'https://github.com/maxevilmind'
      }
    ];
  }
}

customElements.define('projects-page', ProjectsPage); 