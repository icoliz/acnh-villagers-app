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
  it('should render villagers list with villagers', async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style = 'background-color: #fff; padding: 16px';

    const villagersListEl = document.createElement('villagers-list');
    villagersListEl.villagers = villagers;
    element.appendChild(villagersListEl);
    await waitUntil(() => villagersListEl.villagers);

    const punchyInfo = villagersListEl.shadowRoot.querySelector(
      '[data-testid="villager-info-48"]'
    );

    const punchyImg = punchyInfo.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => punchyImg.src);

    await visualDiff(element, 'villagers-list/with-villagers');
  });

  it('should render villagers list without villagers', async () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style = 'background-color: #fff; padding: 16px';

    const villagersListEl = document.createElement('villagers-list');
    element.appendChild(villagersListEl);

    await visualDiff(element, 'villagers-list/without-villagers');
  });
});
