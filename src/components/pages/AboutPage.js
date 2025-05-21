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
      <div class="max-w-4xl mx-auto space-y-8">
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
    `;
  }

  _renderCurrentRole() {
    return html`
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
    `;
  }

  _renderTechnicalStack() {
    return html`
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
    `;
  }

  _renderContributions() {
    return html`
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
    `;
  }
}

customElements.define('about-page', AboutPage); 