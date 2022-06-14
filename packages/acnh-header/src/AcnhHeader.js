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

  render() {
    return html`
      <header class="header">
        <h1 class="title">Animal Crossing Villagers</h1>
        <nav class="nav">
          <ul class="list">
            <li class="list__item">
              <app-link href="/" class="list__item--link">Home</app-link>
            </li>
            <li class="list__item">
              <app-link href="/my-villagers" class="list__item--link"
                >My villagers</app-link
              >
            </li>
            <li class="list__item">
              <app-link href="/wishlist" class="list__item--link"
                >Wishlist</app-link
              >
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}
