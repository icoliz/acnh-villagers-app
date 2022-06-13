import { html } from 'lit-element';

import { AcnhFooter } from '../index.js';

window.customElements.define('acnh-footer', AcnhFooter);

export default {
  title: 'AcnhFooter',
};

export const Footer = () => html`<acnh-footer></acnh-footer>`;
