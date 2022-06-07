import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { outlet } from 'lit-element-router';

import { VillagerInfo } from '../../villager-info/index.js';
import { styles } from './VillagersList.styles.js';

export class VillagersList extends outlet(ScopedElementsMixin(LitElement)) {
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
  }

  render() {
    return html`
      <slot>
        <ul class="villagers">
          ${this.villagers.map(
            (villager) => html`
              <villager-info .villager=${villager}></villager-info>
            `
          )}
        </ul>
      </slot>
    `;
  }
}
