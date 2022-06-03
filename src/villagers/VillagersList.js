import { LitElement, html } from 'lit-element';

import { styles } from './VillagersList.styles.js';

export class VillagersList extends LitElement {
  static get styles() {
    return styles;
  }
  render() {
    return html`<ul>
      <li>Villager 1</li>
      <li>Villager 2</li>
      <li>Villager 3</li>
    </ul>`;
  }
}
