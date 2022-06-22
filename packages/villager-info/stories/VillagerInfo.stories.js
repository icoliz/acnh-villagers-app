import { html } from 'lit-element';

import { VillagerInfo } from '../index.js';
window.customElements.define('villager-info', VillagerInfo);

const villager = {
  birthday: '9/3',
  birthday_string: 'March 9th',
  gender: 'Male',
  icon: 'https://acnhapi.com/v1/icons/villagers/1',
  id: 1,
  image: 'https://acnhapi.com/v1/images/villagers/1',
  nameCN: '阳明',
  nameDE: 'Theo',
  nameEN: 'Cyrano',
  nameES: 'Cirano',
  personality: 'Cranky',
  species: 'Anteater',
};

export default {
  title: 'VillagerInfo',
};

export const WithVillager = (args) =>
  html`<villager-info .villager=${args.villager}></villager-info>`;

WithVillager.args = {
  villager: {
    icon: 'https://acnhapi.com/v1/icons/villagers/1',
    nameEN: 'Cyrano',
    nameES: 'Cirano',
    personality: 'Cranky',
    species: 'Anteater',
  },
};

export const WithoutVillager = () => html`<villager-info></villager-info>`;
