import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { router } from 'lit-element-router';

import { styles } from './AcnhApp.styles.js';
import { getVillagers } from '../../../services/getVillagers.js';
import { AcnhHeader } from '../../acnh-header/index.js';
import { AcnhMain } from '../../acnh-main/index.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { VillagersList } from '../../villagers-list/index.js';
import { AcnhFooter } from '../../acnh-footer/index.js';
import { Link } from '../../app-link/index.js';

export class AcnhApp extends router(ScopedElementsMixin(LitElement)) {
  static get scopedElements() {
    return {
      'acnh-header': AcnhHeader,
      'acnh-main': AcnhMain,
      'villagers-filters': VillagersFilters,
      'villagers-list': VillagersList,
      'acnh-footer': AcnhFooter,
      'app-link': Link,
    };
  }

  static get styles() {
    return styles;
  }

  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
        data: { title: 'Home' },
      },
      {
        name: 'my-villagers',
        pattern: 'my-villagers',
      },
      {
        name: 'wishlist',
        pattern: 'wishlist',
      },
    ];
  }

  static get properties() {
    return {
      villagers: { type: Array },
      route: { type: String },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.route = '';
  }

  connectedCallback() {
    super.connectedCallback();

    getVillagers().then((result) => {
      this.villagers = result;
    });
  }

  router(route) {
    this.route = route;
  }

  render() {
    return html`
      <acnh-header> </acnh-header>
      <h2>Villagers information</h2>
      <!-- TODO: fix router issues: isn't getting active-route-->
      <acnh-main .villagers=${this.villagers} active-route=${this.route}>
        <villagers-filters
          .villagers=${this.villagers}
          route="wishlist"
        ></villagers-filters>
        <villagers-list
          .villagers=${this.villagers}
          route="home"
        ></villagers-list>
        <p route="my-villagers">Hello</p>
      </acnh-main>
      <acnh-footer></acnh-footer>
    `;
  }
}
