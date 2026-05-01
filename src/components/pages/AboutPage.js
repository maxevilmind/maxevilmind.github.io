import { LitElement, html } from 'lit';
import '../ui/CustomCard.js';

/**
 * About page component displaying personal and professional information
 */
export class AboutPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="page-stack">
        ${this._renderAboutMe()}
        ${this._renderCurrentRole()}
        ${this._renderTechnicalStack()}
        ${this._renderContributions()}
      </div>
    `;
  }

  _renderAboutMe() {
    return html`
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
    `;
  }

  _renderCurrentRole() {
    return html`
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
    `;
  }

  _renderTechnicalStack() {
    return html`
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
    `;
  }

  _renderContributions() {
    return html`
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
    `;
  }
}

customElements.define('about-page', AboutPage); 
