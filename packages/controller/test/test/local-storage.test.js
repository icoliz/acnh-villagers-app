import { expect } from '@open-wc/testing';
import { LocalStorageController } from '../local-storage.js';

const villagers = [
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

let fakeStorage = {};

const localStorageMock = {
  getItem: (key) => {
    if (key) {
      return JSON.stringify(villagers);
    }
    return undefined;
  },

  setItem: (key, value) => {
    fakeStorage[key] = value;
  },
};

describe('LocalStorageController', () => {
  it('should get villagers list with a provided key', async () => {
    const localStorage = new LocalStorageController(
      { addController: () => {} },
      localStorageMock
    );

    expect(localStorage.get('myVillagers')).to.deep.equal(villagers);
  });

  it('should get default value if there is no key', async () => {
    const localStorage = new LocalStorageController(
      { addController: () => {} },
      localStorageMock
    );

    expect(localStorage.get()).to.deep.equal([]);
  });

  it('should set a provided value in local Storage key', async () => {
    const localStorage = new LocalStorageController(
      { addController: () => {} },
      localStorageMock
    );

    localStorage.set('myVillagers', villagers);

    expect(fakeStorage.myVillagers).to.deep.equal(JSON.stringify(villagers));
  });
});
