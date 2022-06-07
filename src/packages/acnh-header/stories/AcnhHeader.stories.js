import { html } from 'lit-element';

import { AcnhHeader } from '../src/AcnhHeader.js';

window.customElements.define('acnh-header', AcnhHeader);

export default {
  title: 'AcnhHeader',
};

export const Header = () => html`<acnh-header></acnh-header>`;
