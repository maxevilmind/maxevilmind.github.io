import { LitElement, html, css } from 'lit-element';

export class MaxevilmindCv extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <mwc-top-app-bar centerTitle>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
        <div slot="title">Max Larionov</div>
        <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
        <div>New cv is coming soon...</div>
      </mwc-top-app-bar>
    `;
  }
}
