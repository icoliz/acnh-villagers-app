import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import { styles } from './AppLink.styles.js';

export class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();

    this.href = '';
  }

  onClickLink(event) {
    event.preventDefault();

    this.navigate(this.href);
  }

  render() {
    return html`
      <a href=${this.href} @click=${this.onClickLink}>
        <slot></slot>
      </a>
    `;
  }
}
