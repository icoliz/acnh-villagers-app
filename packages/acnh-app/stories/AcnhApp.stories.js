import { html } from 'lit-element';

import { AcnhApp } from '../src/AcnhApp.js';
window.customElements.define('acnh-app', AcnhApp);

export default {
  title: 'AcnhApp',
};

export const FirstStory = () => html`<acnh-app></acnh-app>`;
