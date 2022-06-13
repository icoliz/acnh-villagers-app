import { html } from 'lit-element';

import { AcnhHome } from '../index.js';

window.customElements.define('acnh-home', AcnhHome);

export default {
  title: 'AcnhHome',
};

export const Home = () => html`<acnh-home></acnh-home>`;
