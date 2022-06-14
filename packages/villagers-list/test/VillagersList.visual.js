import { visualDiff } from '@web/test-runner-visual-regression';
import { waitUntil } from '@open-wc/testing';
import { VillagersList } from '../index.js';

if (!customElements.get('villagers-list')) {
  customElements.define('villagers-list', VillagersList);
}

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
  it('should render villagers list', async () => {
    const element = document.createElement('villagers-list');
    element.villagers = villagers;
    document.body.appendChild(element);
    await waitUntil(() => element.villagers);

    const villagerInfo = element.shadowRoot.querySelector(
      '[data-testid="villager-info"]'
    );
    const villagerImg = villagerInfo.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => villagerImg.src);

    await visualDiff(element, 'villagers-list');
  });
});
