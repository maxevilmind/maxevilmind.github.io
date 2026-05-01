import { LitElement, html } from 'lit';
import '../ui/CustomCard.js';
import '../ui/AppButton.js';

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
        ${this._renderFeatureCards()}
      </div>
    `;
  }

  _renderHero() {
    return html`
      <section class="page-stack" style="padding-block: var(--space-12); gap: var(--space-4);">
        <h1 class="hero-title">
          Hello, I'm Max!
        </h1>
        <p class="hero-text" style="font-size:1.125rem;">
          I'm an engineer with a huge interest in hardware and software development.
          I work as a web developer and in my free time I build different hobby projects: smart home, IoT devices, build with esp32, arduino, raspberry pi, etc.
          Exploring local AI models for image and code generation. Experimenting with LORA based communication systems.
        </p>
        <p class="hero-text" style="font-size:1.125rem;">
          At work I am crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
          With 8+ years of experience in building scalable applications and mentoring teams.
        </p>
        <div class="button-row">
          ${this._renderSocialButton('https://github.com/maxevilmind', 'View GitHub', 'secondary')}
          ${this._renderSocialButton('https://www.linkedin.com/in/larionov-m/', 'Connect on LinkedIn', 'primary')}
        </div>
      </section>
    `;
  }

  _renderSocialButton(href, label, variant) {
    return html`
      <app-button href="${href}" variant="${variant}" target="_blank">
        ${label}
      </app-button>
    `;
  }

  _renderFeatureCards() {
    return html`
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
    `;
  }
}

customElements.define('home-page', HomePage); 
