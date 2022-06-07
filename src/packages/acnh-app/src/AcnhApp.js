import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Router } from '@vaadin/router';

import { styles } from './AcnhApp.styles.js';
import { getVillagers } from '../../../services/getVillagers.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { AcnhHeader } from '../../acnh-header/index.js';
import { VillagersList } from '../../villagers-list/index.js';
import { AcnhFooter } from '../../acnh-footer/index.js';

const outlet = document.querySelector('main');
const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'acnh-app' },
  { path: '/villagers-list', component: 'villagers-list' },
]);

export class AcnhApp extends ScopedElementsMixin(LitElement) {
  connectedCallback() {
    super.connectedCallback();

    // TODO: change to use async await
    getVillagers().then((result) => {
      this.villagers = result;
    });
  }

  static get scopedElements() {
    return {
      'villagers-filters': VillagersFilters,
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
      <h2>Villagers information</h2>
      <main class="main">
        <villagers-filters .villagers=${this.villagers}></villagers-filters>
        <villagers-list .villagers=${this.villagers}></villagers-list>
      </main>
      <acnh-footer></acnh-footer>
    `;
  }
}
