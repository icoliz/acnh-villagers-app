import { html, fixture, expect } from '@open-wc/testing';

import { MyVillagers } from '../index.js';

const villagers = [
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

describe('MyVillagers', () => {
  const scopedElements = { 'my-villagers': MyVillagers };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<my-villagers .villagers=${villagers}></my-villagers>`
    );

    expect(element).to.be.accessible();
  });

  it('should render a villagers list', async () => {
    const element = await scopedFixture(
      html`<my-villagers .villagers=${villagers}></my-villagers>`
    );

    const villagersList = element.shadowRoot.querySelector(
      '[data-testid="villagers-list"]'
    );

    expect(villagersList).to.exist;
  });
});
