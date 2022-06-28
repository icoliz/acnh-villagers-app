import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionInput } from '@lion/input';
import { LionButtonSubmit } from '@lion/button';
import { LionForm } from '@lion/form';
import { localize, LocalizeMixin } from '@lion/localize';

import { styles } from './VillagersFilters.styles.js';

const LOCALE_KEY = 'villagers-filters';

export class VillagersFilters extends LocalizeMixin(
  ScopedElementsMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'lion-button-submit': LionButtonSubmit,
      'lion-input': LionInput,
      'lion-form': LionForm,
    };
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

  static get styles() {
    return styles;
  }

  static get events() {
    return {
      click_search_button: 'click-search-button',
    };
  }

  onClickSearchButton(ev) {
    const formData = ev.target.serializedValue;
    this.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_search_button, {
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
            data-testid="search-input"
            placeholder=${localize.msg(`${LOCALE_KEY}:searchInputPlaceholder`)}
            label=${localize.msg(`${LOCALE_KEY}:searchInputLabel`)}
          ></lion-input>
          <lion-button-submit class="search-button" data-testid="search-button">
            ${localize.msg(`${LOCALE_KEY}:searchButton`)}
          </lion-button-submit>
        </form>
      </lion-form>
    `;
  }
}
