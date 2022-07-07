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
      showWishlistButton: { type: Boolean },
      showMyVillagersButton: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.wishlist = this.controller.get('wishlist', []);
    this.myVillagers = this.controller.get('my-villagers', []);
    this.showWishlistButton = true;
    this.showMyVillagersButton = true;
  }

  isVillagerInList(selectedVillager, list) {
    const villagerInList = list.find(
      (villager) => villager.id === selectedVillager.id
    );

    if (villagerInList !== undefined) {
      return true;
    }
    return false;
  }

  addWishlist(clickedVillager) {
    if (!this.isVillagerInList(clickedVillager, this.wishlist)) {
      this.wishlist = [...this.wishlist, clickedVillager];
      this.controller.set('wishlist', this.wishlist);

      this.requestUpdate();
    }
  }

  removeWishlist(clickedVillager) {
    if (this.isVillagerInList(clickedVillager, this.wishlist)) {
      const villagerIndex = this.wishlist.findIndex(
        (villager) => villager.id === clickedVillager.id
      );

      this.wishlist.splice(villagerIndex, 1);
      this.controller.set('wishlist', this.wishlist);

      this.requestUpdate();
    }
  }

  addMyVillager(clickedVillager) {
    if (!this.isVillagerInList(clickedVillager, this.myVillagers)) {
      this.myVillagers = [...this.myVillagers, clickedVillager];
      this.controller.set('my-villagers', this.myVillagers);

      this.requestUpdate();
    }
  }

  removeMyVillager(clickedVillager) {
    if (this.isVillagerInList(clickedVillager, this.myVillagers)) {
      const villagerIndex = this.myVillagers.findIndex(
        (villager) => villager.id === clickedVillager.id
      );

      this.myVillagers.splice(villagerIndex, 1);
      this.controller.set('my-villagers', this.myVillagers);

      this.requestUpdate();
    }
  }

  render() {
    if (!this.villagers || this.villagers.length === 0) {
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
                .isInWishlist=${this.isVillagerInList(villager, this.wishlist)}
                .isInMyVillagersList=${this.isVillagerInList(
                  villager,
                  this.myVillagers
                )}
                .showWishlistButton=${this.showWishlistButton}
                .showMyVillagersButton=${this.showMyVillagersButton}
              ></villager-info>
            </li>
          `
        )}
      </ul>
    `;
  }
}
