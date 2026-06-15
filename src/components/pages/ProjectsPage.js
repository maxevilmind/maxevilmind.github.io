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
              <li>Prioritize clean, maintainable architecture and the best possible developer experience.</li>
              <li>Use strong defaults before inventing abstractions.</li>
              <li>Make state, loading, and failure visible in the interface.</li>
              <li>Keep components small, composable, and readable.</li>
            </ul>
          </custom-card>
        </section>
      </div>
    `;
  }

  _renderProject(project) {
    if (project.telemetry) {
      return this._renderPortfolioTelemetry(project);
    }

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
            <img class="project-image" src=${project.image} alt=${project.title} width=${project.imageWidth} height=${project.imageHeight} loading="lazy" />
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

  _renderPortfolioTelemetry(project) {
    return html`
      <custom-card
        class="project-card-shell portfolio-telemetry-shell"
        title=${project.title}
        subtitle=${project.subtitle}
        icon=${project.code}
        variant=${project.variant}
        hoverable
        clickable>
        <div class="portfolio-telemetry">
          <div class="telemetry-copy">
            <p class="telemetry-kicker">lighthouse capture / 2026-06-15</p>
            <p>${project.description}</p>
            <div class="badge-list">
              ${project.tags.map(tag => html`<span class="badge">${tag}</span>`)}
            </div>
            <div>
              <a href=${project.link} target="_blank" rel="noopener noreferrer" class="link-inline">View Repository -&gt;</a>
            </div>
          </div>

          <div class="telemetry-dashboard" aria-label="Portfolio performance telemetry">
            <div class="telemetry-score-ring" role="img" aria-label="Five perfect Lighthouse audit scores">
              <span class="score-ring-core">100</span>
              <span class="score-ring-label">audit score</span>
            </div>

            <div class="telemetry-metric-grid">
              ${this._renderTelemetryMetric('FCP', '0.3s', 'first paint')}
              ${this._renderTelemetryMetric('LCP', '0.3s', 'largest paint')}
              ${this._renderTelemetryMetric('TBT', '0ms', 'blocked main thread')}
              ${this._renderTelemetryMetric('CLS', '0', 'layout shift')}
            </div>

            <div class="telemetry-diagram" role="img" aria-label="Request pipeline with four network requests and seventeen kilobytes transferred">
              ${this._renderFlowNode('HTML', '603B')}
              ${this._renderFlowNode('CSS', '4.4KB')}
              ${this._renderFlowNode('APP', '5.8KB')}
              ${this._renderFlowNode('VENDOR', '6.1KB')}
            </div>

            <div class="telemetry-chart-panel">
              <div class="telemetry-chart-heading">
                <span>resource envelope</span>
                <strong>16.9KB / 4 requests</strong>
              </div>
              <div class="resource-bars">
                ${this._renderResourceBar('Script', '70%', '11.9KB')}
                ${this._renderResourceBar('CSS', '26%', '4.4KB')}
                ${this._renderResourceBar('HTML', '4%', '603B')}
              </div>
            </div>

            <div class="telemetry-chart-panel">
              <div class="telemetry-chart-heading">
                <span>main-thread profile</span>
                <strong>94ms total</strong>
              </div>
              <div class="thread-bars">
                ${this._renderThreadBar('layout', '49%')}
                ${this._renderThreadBar('other', '38%')}
                ${this._renderThreadBar('script', '9%')}
                ${this._renderThreadBar('html/css', '2%')}
              </div>
            </div>
          </div>
        </div>
      </custom-card>
    `;
  }

  _renderTelemetryMetric(label, value, detail) {
    return html`
      <div class="telemetry-metric">
        <span>${label}</span>
        <strong>${value}</strong>
        <small>${detail}</small>
      </div>
    `;
  }

  _renderFlowNode(label, value) {
    return html`
      <span class="flow-node">
        <strong>${label}</strong>
        <small>${value}</small>
      </span>
    `;
  }

  _renderResourceBar(label, value, detail) {
    return html`
      <div class="resource-row">
        <span>${label}</span>
        <div class="resource-track"><span style="--value: ${value};"></span></div>
        <strong>${detail}</strong>
      </div>
    `;
  }

  _renderThreadBar(label, value) {
    return html`
      <span class="thread-bar" style="--value: ${value};" data-label=${label}></span>
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
        description: 'Maintained and evolved reusable web component systems across enterprise applications, including documentation, testing, architecture, and design collaboration.',
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
        code: 'AI',
        title: 'AI Models',
        subtitle: 'Personal projects',
        description: 'I spend quite a lot of time experimenting with AI models and tools. In my free time I play with local LLMs and image/video generation pipelines on my 7900xtx. I run these locally: LTX 2.3, WAN 2.2, QWEN, and others. In the past I trained my own models for road markup recognition long before AI hype came in.',
        tags: ['AI', 'LLM', 'image', 'video', 'text'],
        link: 'https://github.com/maxevilmind',
        variant: 'primary'
      },
      {
        code: 'MC',
        title: 'Meshcore',
        subtitle: 'Personal projects',
        description: 'I run my own Meshcore repeater fully powered by solar energy. I own a bunch of lora devices where I run Meshcore firmare and stay online. This is a fun way to tinker with hardware, solder stuff, and do something physical.',
        tags: ['Meshcore', 'Lora', 'esp32', 'hardware',],
        link: 'https://github.com/maxevilmind',
        variant: 'primary'
      },
      {
        code: 'PF',
        title: 'This Portfolio',
        subtitle: 'Live performance telemetry card',
        description: 'A lightweight Lit and Rollup portfolio instrumented like an interface console: tiny request surface, near-instant paint, zero blocking, and no layout drift while still carrying a custom visual system.',
        tags: ['Lit', 'CSS Tokens', '0ms TBT', '16.9KB Transfer', '4 Requests'],
        link: 'https://github.com/maxevilmind/maxevilmind.github.io',
        variant: 'accent',
        telemetry: true
      }
    ];
  }
}

customElements.define('projects-page', ProjectsPage);
