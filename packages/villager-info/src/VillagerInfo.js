import { LitElement, html, nothing } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { localize, LocalizeMixin } from '@lion/localize';
import { LionButton } from '@lion/button';

import { styles } from './VillagerInfo.styles.js';

const LOCALE_KEY = 'villager-info';

export class VillagerInfo extends LocalizeMixin(
  ScopedElementsMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
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

  static get events() {
    return {
      add_wishlist: 'add-wishlist',
      remove_wishlist: 'remove-wishlist',
      add_my_villager: 'add-my-villager',
      remove_my_villager: 'remove-my-villager',
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
    this.isInWishlist = false;
    this.showMyVillagersButton = true;
    this.isInMyVillagersList = false;
  }

  isVillagerEmpty(villager) {
    return Object.keys(villager).length === 0;
  }

  getNameLanguage(villager) {
    if (localize.locale === 'es-ES') {
      return villager.nameES;
    }
    return villager.nameEN;
  }

  onClickAddWishlistButton() {
    this.dispatchEvent(new CustomEvent(VillagerInfo.events.add_wishlist));
  }

  onClickRemoveWishlistButton() {
    this.dispatchEvent(new CustomEvent(VillagerInfo.events.remove_wishlist));
  }

  onClickAddMyVillagersButton() {
    this.dispatchEvent(new CustomEvent(VillagerInfo.events.add_my_villager));
  }

  onClickRemoveMyVillagersButton() {
    this.dispatchEvent(new CustomEvent(VillagerInfo.events.remove_my_villager));
  }

  renderAddMyVillagersButton() {
    return html`
      <lion-button
        class="my-villagers-button"
        data-testid="my-villagers-button-remove"
        @click=${this.onClickRemoveMyVillagersButton}
      >
        ${localize.msg(`${LOCALE_KEY}:isInMyVillagers`)}
      </lion-button>
    `;
  }

  renderRemoveMyVillagersButton() {
    return html`
      <lion-button
        class="my-villagers-button"
        data-testid="my-villagers-button-add"
        @click=${this.onClickAddMyVillagersButton}
      >
        ${localize.msg(`${LOCALE_KEY}:isNotInMyVillagers`)}
      </lion-button>
    `;
  }

  renderMyVillagersButton() {
    if (!this.showMyVillagersButton) {
      return nothing;
    }

    if (this.isInMyVillagersList) {
      return this.renderAddMyVillagersButton();
    }

    return this.renderRemoveMyVillagersButton();
  }

  renderAddWishlistButton() {
    return html`
      <lion-button
        class="wishlist-button"
        data-testid="wishlist-button-remove"
        @click=${this.onClickRemoveWishlistButton}
      >
        ${localize.msg(`${LOCALE_KEY}:isInWishlist`)}
      </lion-button>
    `;
  }

  renderRemoveWishlistButton() {
    return html`
      <lion-button
        class="wishlist-button"
        data-testid="wishlist-button-add"
        @click=${this.onClickAddWishlistButton}
      >
        ${localize.msg(`${LOCALE_KEY}:isNotInWishlist`)}
      </lion-button>
    `;
  }

  renderWishlistButton() {
    if (!this.showWishlistButton) {
      return nothing;
    }

    if (this.isInWishlist) {
      return this.renderAddWishlistButton();
    }
    return this.renderRemoveWishlistButton();
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
          alt="${localize.msg(`${LOCALE_KEY}:imageAltText`, {
            nameLanguage: this.getNameLanguage(this.villager),
          })}"
        />
        <p class="villager__species">${this.villager.species}</p>
        <p class="villager__personality">
          ${localize.msg(`${LOCALE_KEY}:personality`)}:
          ${this.villager.personality}
        </p>
        ${this.renderWishlistButton()} ${this.renderMyVillagersButton()}
      </article>
    `;
  }
}
