import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionInput } from '@lion/input';
import { LionButtonSubmit } from '@lion/button';
import { LionForm } from '@lion/form';

import { styles } from './VillagersFilters.styles.js';

export class VillagersFilters extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-button-submit': LionButtonSubmit,
      'lion-input': LionInput,
      'lion-form': LionForm,
    };
  }

  static get styles() {
    return styles;
  }

  static get events() {
    return {
      click_search_button: 'click-search-button',
    };
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

  onClickSearchButton(ev) {
    const formData = ev.target.serializedValue;
    this.dispatchEvent(
      new CustomEvent('click-search-button', {
        detail: formData['search-input'],
      })
    );
  }

  render() {
    return html`
      <lion-form class="lion-form" @submit=${this.onClickSearchButton}>
        <form class="form" @submit=${(event) => event.preventDefault()}>
          <lion-input
            class="search-input"
            name="search-input"
            placeholder="Example: Cheri"
            label="Villager name"
          ></lion-input>
          <lion-button-submit class="search-button" data-testid="search-button"
            >Search</lion-button-submit
          >
        </form>
      </lion-form>
    `;
  }
}
