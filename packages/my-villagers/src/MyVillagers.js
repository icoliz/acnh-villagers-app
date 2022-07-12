import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from './MyVillagers.styles.js';
import { VillagersList } from '../../villagers-list/index.js';

const LOCALE_KEY = 'my-villagers';

export class MyVillagers extends LocalizeMixin(
  ScopedElementsMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'villagers-list': VillagersList,
    };
  }

  static get styles() {
    return styles;
  }

  static get localizeNamespaces() {
    return [
      {
        [LOCALE_KEY]: (locale) => {
          const namespaces = {
            'en-GB': () => import('../translations/en-GB.js'),
            'es-ES': () => import('../translations/es-ES.js'),
          };

          return (namespaces[locale] || namespaces['en-GB'])();
        },
      },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {
      currentRoute: { type: String },
      villagers: { type: Array },
      showWishlistButton: { type: Boolean },
      showMyVillagersButton: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.showWishlistButton = true;
    this.showMyVillagersButton = true;
  }

  render() {
    return html`
      <div class="my-villagers">
        <h2 class="subtitle">${localize.msg(`${LOCALE_KEY}:subtitle`)}</h2>
      </div>
      <villagers-list
        .currentRoute=${this.currentRoute}
        .villagers=${this.villagers}
        data-testid="villagers-list"
        .showWishlistButton=${this.showWishlistButton}
        .showMyVillagersButton=${this.showMyVillagersButton}
      ></villagers-list>
    `;
  }
}
