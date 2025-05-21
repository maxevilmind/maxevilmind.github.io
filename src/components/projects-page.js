import { LitElement, html, css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class ProjectsPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .lion-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .project-image {
        width: 100%;
        height: 200px;
        background-color: #f3f4f6;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
      }
      .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .tag {
        background-color: #e5e7eb;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.875rem;
      }
    `
  ];
  static properties = {
    projects: { type: Array }
  };
  constructor() {
    super();
    this.projects = [
      {
        title: 'Project One',
        description: 'A modern web application built with web components.',
        tags: ['Web Components', 'JavaScript', 'CSS'],
        link: '#'
      },
      {
        title: 'Project Two',
        description: 'An interactive dashboard with real-time data visualization.',
        tags: ['Data Visualization', 'React', 'D3.js'],
        link: '#'
      },
      {
        title: 'Project Three',
        description: 'A mobile-first e-commerce platform with modern features.',
        tags: ['E-commerce', 'Node.js', 'MongoDB'],
        link: '#'
      }
    ];
  }
  render() {
    return html`
      <h1>My Projects</h1>
      <div class="projects-grid">
        ${this.projects.map(project => html`
          <div class="lion-card">
            <div class="project-image"></div>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div class="tags">
              ${project.tags.map(tag => html`<span class="tag">${tag}</span>`)}
            </div>
            <lion-button @click=${() => window.open(project.link, '_blank')}>
              View Project
            </lion-button>
          </div>
        `)}
      </div>
    `;
  }
}
customElements.define('projects-page', ProjectsPage); 