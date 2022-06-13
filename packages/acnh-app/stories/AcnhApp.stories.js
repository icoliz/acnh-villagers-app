import { html } from 'lit-element';

import { AcnhApp } from '../index.js';
window.customElements.define('acnh-app', AcnhApp);

export default {
  title: 'AcnhApp',
};

export const App = () => html`<acnh-app></acnh-app>`;
