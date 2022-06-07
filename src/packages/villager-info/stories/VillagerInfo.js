import { html } from 'lit-element';

import { VillagerInfo } from '../VillagerInfo.js';
window.customElements.define('villager-info', VillagerInfo);

export default {
  title: 'VillagerInfo',
};

export const VillagerInfo = () => html`<villager-info></villager-info>`;
