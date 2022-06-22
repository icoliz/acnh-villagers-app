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

const Template = (args) => {
  return html`<villager-info
    .villager=${args.villager}
    ?showWishlistButton=${args.showWishlistButton}
    ?isInWishlist=${args.isInWishlist}
    ?showMyVillagersButton=${args.showMyVillagersButton}
    ?isInMyVillagersList=${args.isInMyVillagersList}
  ></villager-info>`;
};

export const WithVillager = Template.bind({});

WithVillager.args = {
  villager: {
    icon: 'https://acnhapi.com/v1/icons/villagers/1',
    nameEN: 'Cyrano',
    nameES: 'Cirano',
    personality: 'Cranky',
    species: 'Anteater',
  },
  showWishlistButton: true,
  isInWishlist: true,
  showMyVillagersButton: true,
  isInMyVillagersList: true,
};

export const WithoutVillager = () => html`<villager-info></villager-info>`;
