import { visualDiff } from '@web/test-runner-visual-regression';
import { html, fixture, waitUntil } from '@open-wc/testing';

import { VillagerInfo } from '../index.js';

const villager = {
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
};

describe('VillagerInfo', () => {
  const scopedElements = { 'villager-info': VillagerInfo };
  const scopedFixture = (template) =>
    fixture(
      html`
        <div style="background-color: #fff; padding: 16px">${template}</div>
      `,
      { scopedElements }
    );

  it('should render a villager', async () => {
    const element = await scopedFixture(html`
      <villager-info .villager=${villager}></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(element, 'villager-info/with-villager');
  });

  it('should render no villager', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);

    await visualDiff(element, 'villager-info/without-villager');
  });
});
