import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { router } from 'lit-element-router';

import { styles } from './AcnhApp.styles.js';
import { getVillagers } from '../../../services/getVillagers.js';
import { AcnhHeader } from '../../acnh-header/index.js';
import { AcnhMain } from '../../acnh-main/index.js';
import { AcnhHome } from '../../acnh-home/index.js';
import { AcnhFooter } from '../../acnh-footer/index.js';
import { Link } from '../../app-link/index.js';

export class AcnhApp extends router(ScopedElementsMixin(LitElement)) {
  static get scopedElements() {
    return {
      'acnh-header': AcnhHeader,
      'acnh-main': AcnhMain,
      'acnh-home': AcnhHome,
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
      filteredVillagers: { type: Array },
      route: { type: String },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.filteredVillagers = [];
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

  clickSearchButton(inputValue) {
    const search = inputValue.detail.toLowerCase();

    this.filteredVillagers = this.villagers.filter((villager) =>
      villager.nameEN.toLowerCase().includes(search)
    );

    return this.filteredVillagers;
  }

  render() {
    console.log(this.filteredVillagers);
    return html`
      <acnh-header> </acnh-header>
      <acnh-main .activeRoute=${this.route}>
        <acnh-home
          .villagers=${this.filteredVillagers}
          @click-search-button=${this.clickSearchButton}
          route="home"
        ></acnh-home>
        <p route="my-villagers">Hello</p>
      </acnh-main>
      <acnh-footer></acnh-footer>
    `;
  }
}
