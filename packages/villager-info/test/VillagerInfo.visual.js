import { visualDiff } from '@web/test-runner-visual-regression';
import { waitUntil } from '@open-wc/testing';
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
  it("should render a villager's information", async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style = 'background-color: #fff; padding: 16px';

    const villagerInfoEl = document.createElement('villager-info');
    villagerInfoEl.villager = villager;
    element.appendChild(villagerInfoEl);

    await waitUntil(() => villagerInfoEl.villager);

    const villagerImg = element.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => villagerImg);

    await visualDiff(element, 'villager-info/with-villager');
  });

  it('should render no villager', async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style = 'background-color: #fff; padding: 16px';

    const villagerInfoEl = document.createElement('villager-info');
    element.appendChild(villagerInfoEl);

    await visualDiff(element, 'villager-info/without-villager');
  });
});
