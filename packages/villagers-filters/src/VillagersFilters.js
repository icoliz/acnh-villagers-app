import { LitElement, html, nothing } from 'lit-element';
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
      inputValue: { type: String },
    };
  }

  constructor() {
    super();

    this.villagers = [];
    this.inputValue = '';
  }

  onChangeSearchInput(event) {
    this.inputValue = event.target.value;
  }

  onClickSearchButton() {
    this.dispatchEvent(
      new CustomEvent('click-search-button', { detail: this.inputValue })
    );
  }

  render() {
    if (!this.villagers) {
      return nothing;
    }
    return html`
      <form class="form" @submit=${(event) => event.preventDefault()}>
        <lion-input
          @input=${(event) => this.onChangeSearchInput(event)}
        ></lion-input>
        <lion-button @click=${(event) => this.onClickSearchButton(event)}
          >Button</lion-button
        >
        <lion-select-rich name="villager-species" label="Villager Species">
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
