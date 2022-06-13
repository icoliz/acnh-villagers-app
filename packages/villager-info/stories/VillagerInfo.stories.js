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

export const Info = () =>
  html`<villager-info .villager=${villager}></villager-info>`;
