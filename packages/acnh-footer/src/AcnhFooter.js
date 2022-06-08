import { LitElement, html } from 'lit-element';

import { styles } from './AcnhFooter.styles.js';

export class AcnhFooter extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <footer class="footer">
        <p>&copy; 2022 <a href="https://github.com/icoliz">Ico Lizhen</a></p>
      </footer>
    `;
  }
}
