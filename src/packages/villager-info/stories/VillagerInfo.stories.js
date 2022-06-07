import { html } from 'lit-element';

import { VillagerInfo } from '../src/VillagerInfo.js';
window.customElements.define('villager-info', VillagerInfo);

export default {
  title: 'VillagerInfo',
};

export const VillagerInfoStory = () => html`<villager-info></villager-info>`;
