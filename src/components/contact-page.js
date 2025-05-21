import { LitElement, html, css } from 'lit';
import { LionForm } from '@lion/ui/form.js';
import { LionInput } from '@lion/ui/input.js';
import { LionTextarea } from '@lion/ui/textarea.js';
import { LionButton } from '@lion/ui/button.js';

class ContactPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .contact-container {
      max-width: 600px;
      margin: 0 auto;
    }

    lion-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      justify-content: center;
    }

    .social-link {
      color: #4b5563;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s;
    }

    .social-link:hover {
      background-color: #f3f4f6;
    }
  `;

  render() {
    return html`
      <div class="contact-container">
        <h1>Get in Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>

        <lion-form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <lion-input
              name="name"
              label="Name"
              .validators=${[
                { type: 'required', getMessage: () => 'Name is required' }
              ]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <lion-input
              name="email"
              type="email"
              label="Email"
              .validators=${[
                { type: 'required', getMessage: () => 'Email is required' },
                { type: 'email', getMessage: () => 'Please enter a valid email' }
              ]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <lion-input
              name="subject"
              label="Subject"
              .validators=${[
                { type: 'required', getMessage: () => 'Subject is required' }
              ]}
            ></lion-input>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <lion-textarea
              name="message"
              label="Message"
              .validators=${[
                { type: 'required', getMessage: () => 'Message is required' }
              ]}
            ></lion-textarea>
          </div>

          <lion-button type="submit">Send Message</lion-button>
        </lion-form>

        <div class="social-links">
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
    `;
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formData = event.target.serializedValue;
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I will get back to you soon.');
  }
}

customElements.define('contact-page', ContactPage); 