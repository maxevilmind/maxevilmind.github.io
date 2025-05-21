import { LitElement, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';
import './custom-card.js';

class HomePage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="space-y-8">
        <section class="text-center space-y-4">
          <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Senior Software Engineer
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting innovative solutions at ING, specializing in JavaScript development and complex problem-solving. 
            With 7+ years of experience in building scalable applications and mentoring teams.
          </p>
          <div class="flex justify-center gap-4 mt-6">
            <a href="https://github.com/maxevilmind" target="_blank" rel="noopener noreferrer" 
               class="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              View GitHub
            </a>
            <a href="https://www.linkedin.com/in/maxevilmind" target="_blank" rel="noopener noreferrer"
               class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
              Connect on LinkedIn
            </a>
          </div>
        </section>

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
      </div>
    `;
  }
}

customElements.define('home-page', HomePage); 