import { LitElement, html, css } from 'lit';

class AboutPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
      }
      @media (max-width: 768px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
      .profile-section {
        text-align: center;
      }
      .profile-image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #f3f4f6;
        margin: 0 auto 1rem;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
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
      .skill-category {
        margin-bottom: 1rem;
      }
      .skill-category h3 {
        margin-bottom: 0.5rem;
      }
      .skill-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .skill-list li {
        margin-bottom: 0.5rem;
      }
    `
  ];
  render() {
    return html`
      <h1>About Me</h1>
      <div class="about-grid">
        <div class="profile-section">
          <div class="profile-image"></div>
          <h2>John Doe</h2>
          <p>Full Stack Developer</p>
          <p>Based in New York, NY</p>
        </div>
        <div class="content-section">
          <div class="lion-card">
            <h2>Bio</h2>
            <p>
              I'm a passionate full-stack developer with over 5 years of experience in building
              modern web applications. I specialize in JavaScript, Web Components, and modern
              frontend frameworks. My goal is to create beautiful, performant, and accessible
              web experiences.
            </p>
          </div>
          <div class="skills-grid">
            <div class="lion-card">
              <h2>Frontend</h2>
              <div class="skill-category">
                <h3>Languages</h3>
                <ul class="skill-list">
                  <li>HTML5</li>
                  <li>CSS3/SASS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3>Frameworks & Libraries</h3>
                <ul class="skill-list">
                  <li>Web Components</li>
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>Lit</li>
                </ul>
              </div>
            </div>
            <div class="lion-card">
              <h2>Backend</h2>
              <div class="skill-category">
                <h3>Languages & Runtime</h3>
                <ul class="skill-list">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3>Databases</h3>
                <ul class="skill-list">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('about-page', AboutPage); 