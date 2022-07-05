import { LitElement, html, nothing } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { VillagerInfo } from '../../villager-info/index.js';
import { styles } from './VillagersList.styles.js';
import { LocalStorageController } from '../../controller/localStorage.js';

export class VillagersList extends ScopedElementsMixin(LitElement) {
  controller = new LocalStorageController(this);

  static get scopedElements() {
    return {
      'villager-info': VillagerInfo,
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
    this.wishlist = this.controller.get('wishlist', []);
  }

  isVillagerInWishlist(selectedVillager) {
    const villagerInWishlist = this.wishlist.find(
      (villager) => villager.id === selectedVillager.id
    );

    if (villagerInWishlist !== undefined) {
      return true;
    }
    return false;
  }

  addWishlist(clickedVillager) {
    if (!this.isVillagerInWishlist(clickedVillager)) {
      this.wishlist = [...this.wishlist, clickedVillager];
      this.controller.set('wishlist', this.wishlist);
    }

    this.requestUpdate();
  }

  removeWishlist(clickedVillager) {
    console.log(
      `clicked remove from wishlist, villager id: ${clickedVillager.id}`
    );
  }

  addMyVillager(clickedVillager) {
    console.log(
      `clicked add to my villagers, villager id: ${clickedVillager.id}`
    );
  }

  removeMyVillager(clickedVillager) {
    console.log(
      `clicked remove from my villagers, villager id: ${clickedVillager.id}`
    );
  }

  render() {
    if (this.villagers.length === 0) {
      return nothing;
    }

    return html`
      <ul class="villagers" data-testid="villagers-ul">
        ${this.villagers.map(
          (villager) => html`
            <li>
              <villager-info
                .villager=${villager}
                data-testid="villager-info-${villager.id}"
                @add-wishlist=${() => this.addWishlist(villager)}
                @remove-wishlist=${() => this.removeWishlist(villager)}
                @add-my-villager=${() => this.addMyVillager(villager)}
                @remove-my-villager=${() => this.removeMyVillager(villager)}
                .showWishlistButton=${true}
                .isInWishlist=${this.isVillagerInWishlist(villager)}
                .showMyVillagersButton=${true}
                .isInMyVillagersList=${false}
              ></villager-info>
            </li>
          `
        )}
      </ul>
    `;
  }
}
