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
        <h3 class="villager__nameEN">${this.villager.nameEN}</h3>
        <h4 class="villager__nameES">${this.villager.nameES}</h4>
        <img
          class="villager__img"
          src=${this.villager.icon}
          data-testid="villager-img"
          alt="Picture of ${this.villager.nameEN}"
        />
        <p class="villager__species">${this.villager.species}</p>
        <p class="villager__personality">
          Personality: ${this.villager.personality}
        </p>
      </article>
    `;
  }
}
