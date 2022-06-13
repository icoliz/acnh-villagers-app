import { html } from 'lit-element';

import { VillagersList } from '../index.js';
import { getVillagers } from '../../../services/getVillagers.js';

window.customElements.define('villagers-list', VillagersList);

let villagers = [];
getVillagers().then((result) => {
  villagers = result;
});

export default {
  title: 'VillagersList',
};

export const Villagers = () =>
  html`<villagers-list .villagers=${villagers}></villagers-list>`;
