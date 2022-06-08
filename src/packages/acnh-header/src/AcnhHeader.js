import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { styles } from './AcnhHeader.styles.js';
import { Link } from '../../app-link/index.js';

export class AcnhHeader extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return styles;
  }

  static get scopedElements() {
    return {
      'app-link': Link,
    };
  }

  static get properties() {
    return {
      route: { type: String },
    };
  }

  constructor() {
    super();

    this.route = '';
  }

  render() {
    return html`
      <header class="header">
        <h1>Animal Crossing Villagers</h1>
        <nav>
          <ul>
            <li><app-link href="/">All Villagers</app-link></li>
            <li><app-link href="/my-villagers">My villagers</app-link></li>
            <li><app-link href="/wishlist">Wishlist</app-link></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
