import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from './AcnhHome.styles.js';
import { acnhApi } from '../../../services/AcnhApi.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { VillagersList } from '../../villagers-list/index.js';
import { LocalStorageController } from '../../controller/test/local-storage.js';

const LOCALE_KEY = 'acnh-home';

export class AcnhHome extends LocalizeMixin(ScopedElementsMixin(LitElement)) {
  controller = new LocalStorageController(this);

  static get scopedElements() {
    return {
      'villagers-filters': VillagersFilters,
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
      villagersToRender: { type: Array },
    };
  }

  constructor() {
    super();

    this.__allVillagers = this.controller.get('allVillagers', []);
    this.villagersToRender = this.controller.get('allVillagers', []);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.controller.get('allVillagers') === undefined) {
      this.setVillagersData();
    }
  }

  setVillagersData = async () => {
    const response = await acnhApi.getVillagers();

    this.__allVillagers = response;
    this.villagersToRender = response;

    this.controller.set('allVillagers', response);
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
        <h2 class="subtitle">${localize.msg(`${LOCALE_KEY}:subtitle`)}</h2>
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
