import { LitElement, html } from 'lit';
import '../ui/CustomCard.js';

/**
 * Home page component displaying introductory information
 */
export class HomePage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="space-y-8">
        ${this._renderHero()}
        ${this._renderFeatureCards()}
      </div>
    `;
  }

  _renderHero() {
    return html`
      <section class="space-y-4 py-12">
        <h1 class="text-5xl font-bold text-white">
          Senior Software Engineer
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl">
          Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
          With 7+ years of experience in building scalable applications and mentoring teams.
        </p>
        <div class="flex gap-4 mt-6">
          ${this._renderSocialButton('https://github.com/maxevilmind', 'View GitHub', 'bg-gray-800 hover:bg-gray-700')}
          ${this._renderSocialButton('https://www.linkedin.com/in/maxevilmind', 'Connect on LinkedIn', 'bg-blue-600 hover:bg-blue-500')}
        </div>
      </section>
    `;
  }

  _renderSocialButton(href, label, classes) {
    return html`
      <a href="${href}" target="_blank" rel="noopener noreferrer" 
         class="px-6 py-3 ${classes} rounded-lg transition-colors">
        ${label}
      </a>
    `;
  }

  _renderFeatureCards() {
    return html`
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <custom-card title="Expertise" hoverable>
          <ul class="space-y-2">
            <li>• JavaScript/TypeScript Development</li>
            <li>• Single Page Applications</li>
            <li>• Cross-team Collaboration</li>
            <li>• Technical Mentoring</li>
            <li>• Complex Problem Solving</li>
          </ul>
        </custom-card>

        <custom-card title="Current Focus" hoverable>
          <ul class="space-y-2">
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