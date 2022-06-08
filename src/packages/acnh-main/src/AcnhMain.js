import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { outlet } from 'lit-element-router';

import { VillagersFilters } from '../../villagers-filters/index.js';
import { VillagersList } from '../../villagers-list/index.js';
import { styles } from './AcnhMain.styles.js';

export class AcnhMain extends outlet(ScopedElementsMixin(LitElement)) {
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
      villagers: { type: Array },
    };
  }

  constructor() {
    super();

    this.villagers = [];
  }

  render() {
    return html`
      <slot>
        <!-- <villagers-filters .villagers=${this
          .villagers}></villagers-filters>
        <villagers-list .villagers=${this.villagers}></villagers-list> -->
      </slot>
    `;
  }
}
