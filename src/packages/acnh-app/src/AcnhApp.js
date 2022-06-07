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
  connectedCallback() {
    super.connectedCallback();

    // TODO: change to use async await
    getVillagers().then((result) => {
      this.villagers = result;
    });
  }

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
        name: 'info',
        pattern: 'info',
      },
    ];
  }

  static get properties() {
    return {
      villagers: { type: Array },
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.route = '';
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    console.log(this.route);

    return html`
      <app-link href="/">Home</app-link>
      <app-link href="/info">Villagers Info</app-link>

      <acnh-header> </acnh-header>
      <h2>Villagers information</h2>
      <!-- TODO: fix router issues: doesn't take the current route-->
      <acnh-main .villagers=${this.villagers}>
        <p route="home">Home</p>
        <p route="info">Info ${this.query.data}</p>
      </acnh-main>
      <acnh-footer></acnh-footer>
    `;
  }
}
