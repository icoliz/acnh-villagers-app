import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';
import { LionSelectRich, LionOption, LionOptions } from '@lion/select-rich';

import { styles } from './VillagersFilters.styles.js';

export class VillagersFilters extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-input': LionInput,
      'lion-select-rich': LionSelectRich,
      'lion-option': LionOption,
      'lion-options': LionOptions,
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
      <form class="form">
        <lion-input></lion-input>
        <lion-button>Button</lion-button>
        <lion-select-rich name="villager-species" label="villager-species">
          <lion-options slot="input" @change=${this.handleChange}>
            <lion-option .choiceValue=${'Anteater'}>Anteater</lion-option>
            <lion-option .choiceValue=${'Bear'}>Bear</lion-option>
            <lion-option .choiceValue=${'Bird'}>Bird</lion-option>
          </lion-options>
        </lion-select-rich>
        <!-- filter by personality -->
      </form>
    `;
  }
}
