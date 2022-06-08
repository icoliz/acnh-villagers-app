import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

import { styles } from './AcnhMain.styles.js';

export class AcnhMain extends outlet(LitElement) {
  static get styles() {
    return styles;
  }

  render() {
    return html` <slot></slot> `;
  }
}
