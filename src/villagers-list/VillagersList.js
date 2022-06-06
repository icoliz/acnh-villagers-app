import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';

import { VillagerInfo } from '../villager-info/VillagerInfo.js';
import { styles } from './VillagersList.styles.js';

export class VillagersList extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'villager-info': VillagerInfo,
      'lion-button': LionButton,
      'lion-input': LionInput,
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
      <lion-input></lion-input>
      <lion-button>Button</lion-button>

      <ul class="villagers">
        ${this.villagers.map(
          (villager) => html`
            <villager-info .villager=${villager}></villager-info>
          `
        )}
      </ul>
    `;
  }
}
