import { html } from 'lit-element';

import { VillagersFilters } from '../index.js';

window.customElements.define('villagers-filters', VillagersFilters);

export default {
  title: 'VillagersFilters',
};

export const Filters = () => html`<villagers-filters></villagers-filters>`;
