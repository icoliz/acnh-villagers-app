import { visualDiff } from '@web/test-runner-visual-regression';
import { html, fixture, waitUntil } from '@open-wc/testing';

import { MyVillagers } from '../index.js';

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

describe('MyVillagers', () => {
  const scopedElements = { 'my-villagers': MyVillagers };
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it('should render my-villagers list with villagers', async () => {
    const element = await scopedFixture(
      html`<my-villagers .villagers=${villagers}></my-villagers>`
    );

    const villagersListEl = element.querySelector('my-villagers');
    await waitUntil(() => villagersListEl);

    // const punchyInfo = villagersListEl.shadowRoot.querySelector(
    //   '[data-testid="villager-info-48"]'
    // );
    // const cheriInfo = villagersListEl.shadowRoot.querySelector(
    //   '[data-testid="villager-info-74"]'
    // );

    // await waitUntil(() =>
    //   punchyInfo.shadowRoot.querySelector('[data-testid="villager-img"]')
    // );
    // await waitUntil(() =>
    //   cheriInfo.shadowRoot.querySelector('[data-testid="villager-img"]')
    // );

    // const punchyImg = punchyInfo.shadowRoot.querySelector(
    //   '[data-testid="villager-img"]'
    // );
    // const cheriImg = cheriInfo.shadowRoot.querySelector(
    //   '[data-testid="villager-img"]'
    // );

    // await waitUntil(() => punchyImg);
    // await waitUntil(() => cheriImg);

    await visualDiff(element, 'my-villagers/with-villagers');
  });

  it('should render my-villagers list without villagers', async () => {
    const element = await scopedFixture(html`<my-villagers></my-villagers>`);

    await visualDiff(element, 'my-villagers/without-villagers');
  });
});
