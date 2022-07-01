import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { styles } from './AcnhHome.styles.js';
import { acnhApi } from '../../../services/getVillagers.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { VillagersList } from '../../villagers-list/index.js';

export class AcnhHome extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'villagers-filters': VillagersFilters,
      'villagers-list': VillagersList,
    };
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      villagersToRender: { type: Array },
    };
  }

  constructor() {
    super();

    this.__allVillagers = [];
    this.villagersToRender = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.setVillagersData();
  }

  setVillagersData = async () => {
    const response = await acnhApi.getVillagers();
    this.__allVillagers = response;
    this.villagersToRender = response;
  };

  clickSearchButton(inputValue) {
    const search = inputValue.detail.toLowerCase();

    this.villagersToRender = this.__allVillagers.filter(
      (villager) =>
        villager.nameEN.toLowerCase().includes(search) ||
        villager.nameES.toLowerCase().includes(search)
    );
  }

  clickResetButton() {
    this.villagersToRender = this.__allVillagers;
  }

  render() {
    return html`
      <div class="home">
        <h2 class="subtitle">All villagers information</h2>
        <villagers-filters
          class="villagers-filters"
          data-testid="villagers-filters"
          @click-search-button=${this.clickSearchButton}
          @click-reset-button=${this.clickResetButton}
        ></villagers-filters>
      </div>
      <villagers-list
        .villagers=${this.villagersToRender}
        data-testid="villagers-list"
      ></villagers-list>
    `;
  }
}
