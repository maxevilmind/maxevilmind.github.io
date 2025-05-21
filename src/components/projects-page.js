import { LitElement, html } from 'lit';
import './custom-card.js';

class ProjectsPage extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="space-y-8">
        <h1 class="text-4xl font-bold text-white mb-8">Projects</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <custom-card 
            title="SPA Platform" 
            subtitle="ING Banking Platform"
            hoverable
            clickable
          >
            <p class="mb-4">
              A single-page application platform that serves as the foundation for various banking services.
              Built with Web Components and modern JavaScript practices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Web Components</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">JavaScript</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Microfrontends</span>
            </div>
          </custom-card>

          <custom-card 
            title="Smart Home Automation" 
            subtitle="Personal Project"
            hoverable
            clickable
          >
            <p class="mb-4">
              IoT-based smart home automation system using ESP32 and Raspberry Pi.
              Features include automated lighting, scripts and scenarios, temperature control, security monitoring, local voice assistant and many other things.
              I contribute to open source projects related to this.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">ESP32</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Raspberry Pi</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">IoT</span>
            </div>
          </custom-card>

          <custom-card 
            title="Algorithm Solutions" 
            subtitle="Open Source Contributions"
            hoverable
            clickable
          >
            <p class="mb-4">
              Collection of algorithm solutions and data structure implementations.
              Focused on performance optimization and clean code practices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Algorithms</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Data Structures</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">JavaScript</span>
            </div>
          </custom-card>

          <custom-card 
            title="UI Component Library" 
            subtitle="Internal Framework"
            hoverable
            clickable
          >
            <p class="mb-4">
              Internal UI component library built with Web Components.
              Provides consistent design patterns and reusable components across applications.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Web Components</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Lit Element</span>
              <span class="px-2 py-1 bg-gray-700 rounded text-sm">Design System</span>
            </div>
          </custom-card>
        </div>
      </div>
    `;
  }
}

customElements.define('projects-page', ProjectsPage); 