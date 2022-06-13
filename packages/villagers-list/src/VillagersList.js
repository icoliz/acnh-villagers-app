import { LitElement, html, nothing } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { VillagerInfo } from '../../villager-info/index.js';
import { styles } from './VillagersList.styles.js';

export class VillagersList extends ScopedElementsMixin(LitElement) {
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
    if (!this.villagers) {
      return nothing;
    }
    return html`
      <ul class="villagers">
        ${this.villagers.map(
          (villager) => html`
            <villager-info
              .villager=${villager}
              data-testid="villager-info"
            ></villager-info>
          `
        )}
      </ul>
    `;
  }
}
