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
    console.log(formData);
    this.dispatchEvent(
      new CustomEvent('click-search-button', {
        detail: formData['search-input'],
      })
    );
  }

  render() {
    return html`
      <lion-form class="form" @submit=${this.onClickSearchButton}>
        <form @submit=${(event) => event.preventDefault()}>
          <lion-input
            name="search-input"
            placeholder="Example: Cheri"
            data-testid="search-input"
            label="Villager name"
          ></lion-input>
          <lion-button-submit data-testid="search-button"
            >Button</lion-button-submit
          >
        </form>
      </lion-form>
    `;
  }
}
