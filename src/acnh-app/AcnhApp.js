import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { styles } from './AcnhApp.styles.js';
import { getVillagers } from '../services/getVillagers.js';
import { AcnhHeader } from '../acnh-header/AcnhHeader.js';
import { VillagersList } from '../villagers-list/VillagersList.js';
import { AcnhFooter } from '../acnh-footer/AcnhFooter.js';

export class AcnhApp extends ScopedElementsMixin(LitElement) {
  connectedCallback() {
    super.connectedCallback();

    getVillagers().then((result) => {
      this.villagers = result;
    });
  }

  static get scopedElements() {
    return {
      'villagers-list': VillagersList,
      'acnh-header': AcnhHeader,
      'acnh-footer': AcnhFooter,
    };
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      villagers: { type: Array },
    };
  }

  constructor() {
    super();

    this.villagers = [];
  }

  render() {
    return html`
      <acnh-header></acnh-header>
      <main class="main">
        <h2>Villagers information</h2>
        <villagers-list .villagers=${this.villagers}></villagers-list>
      </main>
      <acnh-footer></acnh-footer>
    `;
  }
}
