import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { router } from 'lit-element-router';

import { styles } from './AcnhApp.styles.js';
import { AcnhHeader } from '../../acnh-header/index.js';
import { AcnhMain } from '../../acnh-main/index.js';
import { AcnhHome } from '../../acnh-home/index.js';
import { MyVillagers } from '../../my-villagers/index.js';
import { AcnhFooter } from '../../acnh-footer/index.js';
import { Link } from '../../app-link/index.js';

export class AcnhApp extends router(ScopedElementsMixin(LitElement)) {
  static get scopedElements() {
    return {
      'acnh-header': AcnhHeader,
      'acnh-main': AcnhMain,
      'acnh-home': AcnhHome,
      'my-villagers': MyVillagers,
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
    this.wishlistVillagers = [];
    this.route = '';
  }

  router(route) {
    this.route = route;
  }

  render() {
    return html`
      <acnh-header> </acnh-header>
      <acnh-main .activeRoute=${this.route}>
        <acnh-home
          .villagers=${this.filteredVillagers}
          data-testid="acnh-home"
          route="home"
          class="acnh-home"
        ></acnh-home>
        <my-villagers route="my-villagers" class="my-villagers"
          >My villagers</my-villagers
        >
        <p route="wishlist" class="wishlist">Wishlist</p>
      </acnh-main>
      <acnh-footer></acnh-footer>
    `;
  }
}
