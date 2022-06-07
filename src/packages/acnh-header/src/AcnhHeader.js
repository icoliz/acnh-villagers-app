import { LitElement, html } from 'lit-element';

import { styles } from './AcnhHeader.styles.js';
import { Link } from '../../app-link/index.js';

export class AcnhHeader extends LitElement {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      'app-link': Link,
    };
  }

  render() {
    return html`
      <header class="header">
        <h1>Animal Crossing Villagers</h1>
        <nav>
          <ul></ul>
        </nav>
      </header>
    `;
  }
}
