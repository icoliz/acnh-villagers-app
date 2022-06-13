import { LitElement, html } from 'lit-element';

import { styles } from './VillagerInfo.styles.js';

export class VillagerInfo extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      villager: { type: Object },
    };
  }

  constructor() {
    super();

    this.villager = {};
  }

  render() {
    return html`
      <article class="villager" data-testid="villager-element">
        <h3>${this.villager.nameEN}</h3>
        <h4>${this.villager.nameES}</h4>
        <img
          class="villager__img"
          src=${this.villager.image}
          data-testid="villager-img"
          alt="Picture of ${this.villager.nameEN}"
        />
        <p>${this.villager.species}</p>
        <p>Personality: ${this.villager.personality}</p>
      </article>
    `;
  }
}
