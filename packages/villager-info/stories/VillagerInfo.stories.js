import { html } from 'lit-element';

import { VillagerInfo } from '../index.js';

window.customElements.define('villager-info', VillagerInfo);

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
  isInWishlist: false,
  showMyVillagersButton: true,
  isInMyVillagersList: false,
};

export const WithoutVillager = () => html`<villager-info></villager-info>`;
