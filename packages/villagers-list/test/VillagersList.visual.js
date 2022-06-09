import { visualDiff } from '@web/test-runner-visual-regression';
import { VillagersList } from '../index.js';

if (!customElements.get('villagers-list')) {
  customElements.define('villagers-list', VillagersList);
}

const villagers = [
  {
    birthday: '9/3',
    birthday_string: 'March 9th',
    gender: 'Male',
    icon: 'https://acnhapi.com/v1/icons/villagers/1',
    id: 1,
    image: 'https://acnhapi.com/v1/images/villagers/1',
    nameCN: '阳明',
    nameDE: 'Theo',
    nameEN: 'Cyrano',
    nameES: 'Cirano',
    personality: 'Cranky',
    species: 'Anteater',
  },
  {
    birthday: '17/3',
    birthday_string: 'March 17th',
    gender: 'Female',
    icon: 'https://acnhapi.com/v1/icons/villagers/74',
    id: 74,
    image: 'https://acnhapi.com/v1/images/villagers/74',
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

    await visualDiff(element, 'villagers-list');
  });
});
