import { html } from 'lit-element';

import { Link } from '../index.js';

window.customElements.define('app-link', Link);

export default {
  title: 'AppLink',
};

export const LinkToMyVillagers = () =>
  html`<app-link href="/my-villagers">My villagers</app-link>`;

export const LinkToWishlist = () =>
  html`<app-link href="/wishlist">Wishlist</app-link>`;
