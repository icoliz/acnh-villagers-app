import { LitElement, html, nothing } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from './VillagerInfo.styles.js';

const LOCALE_KEY = 'villager-info';

export class VillagerInfo extends LocalizeMixin(LitElement) {
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

  static get events() {
    return {
      click_add_my_villager: 'click-add-my-villager',
      click_add_wishlist: 'click-add-wishlist',
    };
  }

  static get properties() {
    return {
      villager: { type: Object },
      showWishlistButton: { type: Boolean },
      isInWishlist: { type: Boolean },
      showMyVillagersButton: { type: Boolean },
      isInMyVillagersList: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.villager = {};
    this.showWishlistButton = true;
    this.isInWishlist = true;
    this.showMyVillagersButton = true;
    this.isInMyVillagersList = true;
  }

  isVillagerEmpty(villager) {
    return Object.keys(villager).length === 0;
  }

  onClickMyVillagersButton(event) {
    const villagerId = parseInt(event.target.dataset.id);

    this.dispatchEvent(
      new CustomEvent('click-add-my-villager', { detail: villagerId })
    );
  }

  onClickWishlistButton(event) {
    const villagerId = parseInt(event.target.dataset.id);

    this.dispatchEvent(
      new CustomEvent('click-add-wishlist', { detail: villagerId })
    );
  }

  render() {
    if (this.isVillagerEmpty(this.villager)) {
      return nothing;
    }

    return html`
      <article class="villager" data-testid="villager-element">
        <h3 class="villager__nameEN">${this.villager.nameEN}</h3>
        <h4 class="villager__nameES">${this.villager.nameES}</h4>
        <img
          class="villager__img"
          src=${this.villager.icon}
          data-testid="villager-img"
          alt="Picture of ${this.villager.nameEN}"
        />
        <p class="villager__species">${this.villager.species}</p>
        <p class="villager__personality">
          ${localize.msg(`${LOCALE_KEY}:personality`)}:
          ${this.villager.personality}
        </p>
      </article>
      <button
        class="my-villagers-button"
        data-id=${this.villager.id}
        @click=${(event) => this.onClickMyVillagersButton(event)}
      >
        My Villagers
      </button>
      <button
        class="wishlist-button"
        @click=${(event) => this.onClickWishlistButton(event)}
      >
        Wishlist
      </button>
    `;
  }
}
