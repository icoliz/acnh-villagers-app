import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import { VillagersList } from '../index.js';

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

describe('VillagersList', () => {
  const scopedElements = { 'villagers-list': VillagersList };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<villagers-list></villagers-list>`
    );

    await expect(element).to.be.accessible();
  });

  it('should return VillagerInfo component if there are villagers', async () => {
    const element = await scopedFixture(
      html`<villagers-list .villagers=${villagers}></villagers-list>`
    );
    const villagerInfo = element.shadowRoot.querySelector(
      '[data-testid="villager-info"]'
    );
  });
});
