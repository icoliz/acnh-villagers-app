import { LitElement, html, nothing } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';
import { LionForm } from '@lion/form';

import { styles } from './VillagersFilters.styles.js';

export class VillagersFilters extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-input': LionInput,
      'lion-form': LionForm,
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
    console.log(this.villagers);
    if (!this.villagers) {
      return nothing;
    }
    return html`
      <lion-form class="form" @submit=${(event) => event.preventDefault()}>
        <lion-input
          placeholder="please write something..."
          @input=${(event) => this.onChangeSearchInput(event)}
        ></lion-input>
        <lion-button @click=${(event) => this.onClickSearchButton(event)}
          >Button</lion-button
        >
      </lion-form>
    `;
  }
}
