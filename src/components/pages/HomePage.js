import { LitElement, html } from 'lit';
import '../ui/CustomCard.js';
import '../ui/AppButton.js';
import '../ui/SpaceInvadersGame.js';

/**
 * Home page component displaying introductory information
 */
export class HomePage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="page-stack">
        ${this._renderHero()}
        ${this._renderMetrics()}
        ${this._renderSkillDashboard()}
      </div>
    `;
  }

  _renderHero() {
    return html`
      <section class="grid hero-layout">
        <div class="panel hero-console">
          <div class="panel-content">
            <div class="terminal-lines">
              <span class="terminal-line">booting maksim-larionov.portfolio</span>
              <span class="terminal-line">interface craft mode enabled</span>
            </div>

            <div class="hero-copy">
              <p class="eyebrow">senior frontend engineer</p>
              <h1 class="hero-title">Clean <span class="accent">Future</span> UI</h1>
              <p class="hero-text">
                I build and evolve large-scale web architectures - microfrontends, design systems, internal tooling, and cross-team platform standards.
                Facilitated migrations of dozens of applications, improved developer experience across teams by providing a fontend platform for microfrontends, driving adoption of improved monitoring,
                best practices for testing and AI workflows adoption.
              </p>
              <p class="hero-text">
                I enjoy operating at the intersection of architecture, scalability, and developer productivity, turning fragmented frontend into maintainable, scalable systems.
                Strong JavaScript foundation. Experience across Web Components, and Node.js, native browser stack and latest JavaScript standards. I care less about frameworks and more about building durable systems.
              </p>
              <p class="hero-text">
                Outside of work, I enjoy experimenting with embedded systems like ESP32, Arduino, Raspberry Pi, IOTs, Smart Home, music production, AI, running and many other things.
              </p>
              <div class="button-row">
                ${this._renderSocialButton('https://github.com/maxevilmind', 'View GitHub', 'secondary')}
                ${this._renderSocialButton('https://www.linkedin.com/in/larionov-m/', 'Connect on LinkedIn', 'primary')}
              </div>
            </div>

            <div>
              <div class="status-strip">
                <span class="status-pill green">web components</span>
                <span class="status-pill hot">design systems</span>
                <span class="status-pill">frontend platforms</span>
              </div>
              <div style="margin-top: var(--space-5);">
                <div class="progress-track"><span class="progress-fill" style="--value: 84%;"></span></div>
                <div class="progress-meta">
                  <span>portfolio redesign</span>
                  <span>84% done</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="panel panel-compact profile-card">
          <div class="panel-content profile-panel-content">
            <div class="panel-header">
              <div>
                <p class="eyebrow">operator</p>
                <h2 class="panel-title">Maksim Larionov</h2>
              </div>
              <span class="panel-code">v8+</span>
            </div>
            <div class="mt-20 mb-20 terminal-lines">
              <span class="terminal-line">location: Amsterdam area</span>
              <span class="terminal-line">role: staff engineer at ABN AMRO</span>
              <span class="terminal-line">focus: UI platforms, components, IoT</span>
            </div>
            <space-invaders-game class="profile-game"></space-invaders-game>
          </div>
        </aside>
      </section>
    `;
  }

  _renderSocialButton(href, label, variant) {
    return html`
      <app-button href=${href} variant=${variant} target="_blank">
        ${label}
      </app-button>
    `;
  }

  _renderMetrics() {
    return html`
      <section class="metric-grid">
        ${this._renderMetric('8+', 'years building interfaces')}
        ${this._renderMetric('100%', 'web component native')}
        ${this._renderMetric('24/7', 'curiosity runtime')}
        ${this._renderMetric('1ms', 'performance mindset')}
      </section>
    `;
  }

  _renderMetric(value, label) {
    return html`
      <div class="metric-card">
        <div class="metric-value">${value}</div>
        <div class="metric-label">${label}</div>
      </div>
    `;
  }

  _renderSkillDashboard() {
    return html`
      <section class="grid dashboard-grid">
        <custom-card title="Skill Tracker" subtitle="production calibrated" icon="01" variant="accent" hoverable>
          <div class="skill-list">
            ${this._renderSkill('JavaScript / TypeScript', '96%')}
            ${this._renderSkill('Web Components', '92%')}
            ${this._renderSkill('Design Systems', '88%')}
            ${this._renderSkill('Mentoring', '90%')}
            ${this._renderSkill('Microfrontends', '91%')}
          </div>
        </custom-card>

        <custom-card title="Interface Telemetry" subtitle="clean data surface" icon="02" variant="primary" hoverable>
          <div class="chart-card">
            <p>
              I like interfaces that make status visible without visual noise: clear contrast, rhythm, alignment, and just enough glow to make the UI feel alive.
            </p>
            <div class="bar-chart" role="img" aria-label="Interface telemetry chart">
              <span class="chart-bar" style="--value: 38%;" data-label="speed"></span>
              <span class="chart-bar" style="--value: 52%;" data-label="clarity"></span>
              <span class="chart-bar" style="--value: 46%;" data-label="motion"></span>
              <span class="chart-bar" style="--value: 78%;" data-label="system"></span>
              <span class="chart-bar" style="--value: 58%;" data-label="craft"></span>
              <span class="chart-bar" style="--value: 86%;" data-label="polish"></span>
            </div>
          </div>
        </custom-card>
      </section>
    `;
  }

  _renderSkill(label, value) {
    return html`
      <div class="skill-row">
        <div class="skill-label">
          <span>${label}</span>
          <span>${value}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${value};"></span></div>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
