import { visualDiff } from '@web/test-runner-visual-regression';
import { waitUntil } from '@open-wc/testing';
import { AcnhApp } from '../index.js';

if (!customElements.get('acnh-app')) {
  customElements.define('acnh-app', AcnhApp);
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

describe('AcnhApp', () => {
  it('should render app component', async () => {
    const element = document.createElement('acnh-app');
    element.villagers = villagers;
    document.body.appendChild(element);
    await waitUntil(() => element.villagers);

    const acnhHome = element.shadowRoot.querySelector(
      '[data-testid="acnh-home"]'
    );
    acnhHome.villagers = villagers;
    await waitUntil(() => acnhHome.villagers);

    const villagersList = acnhHome.shadowRoot.querySelector(
      '[data-testid="villagers-list"]'
    );
    villagersList.villagers = villagers;
    await waitUntil(() => villagersList.villagers);

    const villagerInfo = villagersList.shadowRoot.querySelector(
      '[data-testid="villager-info"]'
    );
    villagerInfo.villagers = villagers;
    await waitUntil(() => villagersList.villagers);

    await visualDiff(element, 'acnh-app');
  });
});
