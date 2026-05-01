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
          Senior Software Engineer
        </h1>
        <p class="hero-text" style="font-size:1.125rem;">
          Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
          With 7+ years of experience in building scalable applications and mentoring teams.
        </p>
        <div class="button-row">
          ${this._renderSocialButton('https://github.com/maxevilmind', 'View GitHub', 'default')}
          ${this._renderSocialButton('https://www.linkedin.com/in/maxevilmind', 'Connect on LinkedIn', 'primary')}
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
