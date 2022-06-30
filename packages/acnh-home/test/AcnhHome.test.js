import { html, fixture, expect } from '@open-wc/testing';

import { AcnhHome } from '../index.js';
import { VillagersFilters } from '../../villagers-filters/index.js';

const villagers = [
  {
    birthday: '11/4',
    birthday_string: 'April 11th',
    gender: 'Male',
    icon: '/.web-test-runner/assets/img/punchy.png',
    id: 48,
    image: '/.web-test-runner/assets/img/punchy.png',
    nameCN: '尔光',
    nameDE: 'Julian',
    nameEN: 'Punchy',
    nameES: 'Félix',
    personality: 'Lazy',
    species: 'Cat',
  },
  {
    birthday: '17/3',
    birthday_string: 'March 17th',
    gender: 'Female',
    icon: '/.web-test-runner/assets/img/cheri.png',
    id: 74,
    image: '/.web-test-runner/assets/img/cheri.png',
    nameCN: '樱桃',
    nameDE: 'Claudia',
    nameEN: 'Cheri',
    nameES: 'Cerecita',
    personality: 'Peppy',
    species: 'Cub',
  },
];

describe('AcnhHome', () => {
  const scopedElements = { 'acnh-home': AcnhHome };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<acnh-home .villagers=${villagers}></acnh-home>`
    );

    expect(element).to.be.accessible();
  });

  it('should reset search when reset event is fired', async () => {
    const element = await scopedFixture(
      html`<acnh-home .villagers=${villagers}></acnh-home>`
    );

    const villagersFiltersEl =
      element.shadowRoot.querySelector('villagers-filters');

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_reset_button)
    );

    expect(element.villagers).to.be.deep.equal(villagers);
  });
});
