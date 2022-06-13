import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { getVillagers } from '../../../services/getVillagers.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { VillagersList } from '../../villagers-list/index.js';

export class AcnhHome extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'villagers-filters': VillagersFilters,
      'villagers-list': VillagersList,
    };
  }

  static get properties() {
    return {
      villagers: { type: Array },
      filteredVillagers: { type: Array },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.filteredVillagers = [];
  }

  connectedCallback() {
    super.connectedCallback();

    getVillagers().then((result) => {
      this.villagers = result;
      this.filteredVillagers = result;
    });
  }

  clickSearchButton(inputValue) {
    const search = inputValue.detail.toLowerCase();

    this.filteredVillagers = this.villagers.filter(
      (villager) =>
        villager.nameEN.toLowerCase().includes(search) ||
        villager.nameES.toLowerCase().includes(search)
    );
    return this.filteredVillagers;
  }

  render() {
    return html`
      <h2>All villagers information</h2>
      <villagers-filters
        .villagers=${this.villagers}
        @click-search-button=${this.clickSearchButton}
      ></villagers-filters>
      <villagers-list .villagers=${this.filteredVillagers}></villagers-list>
    `;
  }
}
