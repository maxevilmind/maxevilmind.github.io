import { LitElement, html, css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class HomePage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .hero {
        text-align: center;
        padding: 4rem 0;
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        color: white;
        margin: -2rem -1rem 2rem -1rem;
      }
      .hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .hero p {
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .featured {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .lion-card {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    `
  ];
  render() {
    return html`
      <div class="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing web experiences</p>
      </div>
      <div class="featured">
        <div class="lion-card">
          <h2>Latest Projects</h2>
          <p>Check out my most recent work and side projects.</p>
          <lion-button @click=${() => this.dispatchEvent(new CustomEvent('navigate', { detail: 'projects' }))}>
            View Projects
          </lion-button>
        </div>
        <div class="lion-card">
          <h2>About Me</h2>
          <p>Learn more about my background and expertise.</p>
          <lion-button @click=${() => this.dispatchEvent(new CustomEvent('navigate', { detail: 'about' }))}>
            Read More
          </lion-button>
        </div>
        <div class="lion-card">
          <h2>Get in Touch</h2>
          <p>Interested in working together? Let's connect!</p>
          <lion-button @click=${() => this.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}>
            Contact Me
          </lion-button>
        </div>
      </div>
    `;
  }
}
customElements.define('home-page', HomePage); 