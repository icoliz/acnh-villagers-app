import { LitElement, html } from 'lit-element';

import { styles } from './AcnhHeader.styles.js';

export class AcnhHeader extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html`
      <header class="header">
        <h1>Animal Crossing Villagers</h1>
        <nav>
          <ul>
            <!-- TODO: fix router -->
            <li><a href="/">Home</a></li>
            <li><a href="/villagers-list">My villagers</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
