import { html, fixture, waitUntil } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

import { AcnhHome } from '../index.js';

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
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it('should render home component', async () => {
    const element = await scopedFixture(
      html`<acnh-home .villagers=${villagers}></acnh-home>`
    );

    const acnhHomeEl = element.querySelector('acnh-home');

    const villagersList = acnhHomeEl.shadowRoot.querySelector(
      '[data-testid="villagers-list"]'
    );

    villagersList.villagers = villagers;

    await waitUntil(() => villagersList.villagers);

    const villagerInfo = villagersList.shadowRoot.querySelector(
      '[data-testid="villager-info-48"]'
    );

    await waitUntil(() =>
      villagerInfo.shadowRoot.querySelector('[data-testid="villager-img"]')
    );

    const villagerImg = villagerInfo.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => villagerImg);

    await visualDiff(element, 'acnh-home/acnh-home');
  });
});
