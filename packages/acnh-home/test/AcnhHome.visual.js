import { visualDiff } from '@web/test-runner-visual-regression';
import { waitUntil } from '@open-wc/testing';
import { AcnhHome } from '../index.js';

if (!customElements.get('acnh-home')) {
  customElements.define('acnh-home', AcnhHome);
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

describe('AcnhHome', () => {
  it('should render home component', async () => {
    const element = document.createElement('acnh-home');
    element.villagers = villagers;
    document.body.appendChild(element);
    await waitUntil(() => element.villagers);

    const villagersList = element.shadowRoot.querySelector(
      '[data-testid="villagers-list"]'
    );
    villagersList.villagers = villagers;
    await waitUntil(() => villagersList.villagers);

    const villagerInfo = villagersList.shadowRoot.querySelector(
      '[data-testid="villager-info"]'
    );
    villagerInfo.villagers = villagers;
    await waitUntil(() => villagersList.villagers);

    await visualDiff(element, 'acnh-home');
  });
});
