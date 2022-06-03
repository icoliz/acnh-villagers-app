import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { styles } from './AcnhApp.styles.js';
import { callToApi } from '../services/callToApi.js';
import { VillagersList } from '../villagers/VillagersList.js';

callToApi();

export class AcnhApp extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return { 'villagers-list': VillagersList };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <header class="header">
        <h1>Animal Crossing Villagers</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>My villagers</li>
            <li>Villagers wishlist</li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <h2>Villagers information</h2>
        <villagers-list></villagers-list>
        <!-- VillagersList component -->
      </main>
      <footer class="footer">
        <p>&copy; 2022 <a href="#">Ico Lizhen</a></p>
      </footer>
    `;
  }
}
