import { visualDiff } from '@web/test-runner-visual-regression';
import { html, fixture, aTimeout, waitUntil } from '@open-wc/testing';

import { VillagerInfo } from '../index.js';

if (!customElements.get('villager-info')) {
  customElements.define('villager-info', VillagerInfo);
}

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

    const villagerInfoEl = element.querySelector('villager-info');
    await aTimeout(200);

    const villagerImg = villagerInfoEl.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );
    await waitUntil(() => villagerImg);

    await visualDiff(element, 'villager-info/with-villager');
  });

  it('should render no villager', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);

    await visualDiff(element, 'villager-info/without-villager');
  });
});
