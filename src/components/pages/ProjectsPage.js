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
          ${this.projects.map(project => this._renderProject(project))}
        </section>

        <section class="grid dashboard-grid">
          <custom-card title="Capability Matrix" subtitle="current operating profile" icon="CM" variant="primary" hoverable>
            <div class="data-table">
              ${this._renderCapability('DS', 'Design Systems', 'tokens, primitives, documentation', 'A+')}
              ${this._renderCapability('PF', 'Platform Frontend', 'micro-frontends, routing, scale', 'A')}
              ${this._renderCapability('UX', 'Interaction Craft', 'motion, feedback, responsive UI', 'A')}
              ${this._renderCapability('HW', 'Hardware Curiosity', 'ESP32, Raspberry Pi, LoRa', 'B+')}
            </div>
          </custom-card>

          <custom-card title="Build Principles" subtitle="how I prefer to ship" icon="BP" variant="accent" hoverable>
            <ul class="list">
              <li>Use strong defaults before inventing abstractions.</li>
              <li>Make state, loading, and failure visible in the interface.</li>
              <li>Keep components small, composable, and readable.</li>
              <li>Care about visual hierarchy as much as implementation detail.</li>
            </ul>
          </custom-card>
        </section>
      </div>
    `;
  }

  _renderProject(project) {
    return html`
      <custom-card
        class="project-card-shell"
        title=${project.title}
        subtitle=${project.subtitle}
        icon=${project.code}
        variant=${project.variant}
        hoverable
        clickable>
        <div class="project-card-content">
          ${project.image ? html`
            <img class="project-image" src=${project.image} alt=${project.title} loading="lazy" />
          ` : ''}
          <p>${project.description}</p>
          <div class="badge-list">
            ${project.tags.map(tag => html`<span class="badge">${tag}</span>`)}
          </div>
          ${project.link ? html`
            <div>
              <a href=${project.link} target="_blank" rel="noopener noreferrer" class="link-inline">View Project -&gt;</a>
            </div>
          ` : ''}
        </div>
      </custom-card>
    `;
  }

  _renderCapability(icon, name, detail, score) {
    return html`
      <div class="data-row">
        <span class="data-icon">${icon}</span>
        <span>
          <span class="data-name">${name}</span><br>
          <span class="data-detail">${detail}</span>
        </span>
        <span class="data-score">${score}</span>
      </div>
    `;
  }

  get projects() {
    return [
      {
        code: 'WC',
        title: 'Web Components',
        subtitle: 'Enterprise component system',
        description: 'Maintaining and evolving reusable web component systems across enterprise applications, including documentation, testing, architecture, and design collaboration.',
        tags: ['Web Components', 'TypeScript', 'Storybook', 'CI/CD'],
        link: null,
        variant: 'primary'
      },
      {
        code: 'SP',
        title: 'SPA Platform',
        subtitle: 'Enterprise application shell',
        description: 'Contributed to a single-page application platform that hosts multiple micro-frontends with standardized architecture, authentication, and shared tooling.',
        tags: ['JavaScript', 'Architecture', 'Authentication', 'Performance'],
        link: null,
        variant: 'accent'
      },
      {
        code: 'IoT',
        title: 'Home IoT System',
        subtitle: 'Personal automation lab',
        description: 'Built home automation with Raspberry Pi, custom sensors, MQTT, open-source integrations, ESP32, and Arduino. The boring routines run themselves so there is more time to build things.',
        tags: ['IoT', 'Node.js', 'MQTT', 'ESP32'],
        link: 'https://github.com/maxevilmind/home-iot',
        variant: 'secondary'
      },
      {
        code: 'OS',
        title: 'Open Source',
        subtitle: 'Community contributions',
        description: 'Small but meaningful contributions across JavaScript projects, documentation, testing, and tooling. Not everything has to be massive to be useful.',
        tags: ['Open Source', 'JavaScript', 'Docs', 'Testing'],
        link: 'https://github.com/maxevilmind',
        variant: 'primary'
      },
      {
        code: 'PF',
        title: 'This Portfolio',
        subtitle: 'Retro-futurist UI build',
        image: 'assets/stats.png',
        description: 'A lightweight web-components portfolio redesigned as a neon dashboard. It focuses on fast loading, responsive composition, and clean visual systems without a heavy framework.',
        tags: ['Lit', 'CSS Tokens', 'Responsive UI', 'Rollup'],
        link: 'https://github.com/maxevilmind/maxevilmind.github.io',
        variant: 'accent'
      }
    ];
  }
}

customElements.define('projects-page', ProjectsPage);
