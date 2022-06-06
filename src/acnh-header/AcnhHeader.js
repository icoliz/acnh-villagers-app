import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';

import { styles } from './AcnhHeader.styles.js';

// const outlet = document.getElementById('outlet');
// const router = new Router(outlet);
// router.setRoutes([
//   { path: '/', component: 'acnh-app' },
//   { path: '/my-villagers', component: 'villagers-list' },
// ]);

export class AcnhHeader extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return { location: Object };
  }

  render() {
    return html`
      <header class="header">
        <h1>Animal Crossing Villagers</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/my-villagers">My villagers</a></li>
            <li><a href="/wishlist">Villagers wishlist</a></li>
          </ul>
        </nav>
        <!-- <div id="outlet">Content</div> -->
      </header>
    `;
  }
}
