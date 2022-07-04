import { ajax } from '@lion/ajax';

export const VILLAGERS_ENDPOINT = 'http://acnhapi.com/v1/villagers/';

export class AcnhApi {
  __filterVillagersData(data) {
    const dataArray = Object.values(data);

    return dataArray.map((villager) => ({
      id: villager.id,
      nameEN: villager.name['name-EUen'],
      nameES: villager.name['name-EUes'],
      nameDE: villager.name['name-EUde'],
      nameCN: villager.name['name-CNzh'],
      personality: villager.personality,
      birthday: villager.birthday,
      birthday_string: villager['birthday-string'],
      species: villager.species,
      gender: villager.gender,
      icon: villager.icon_uri,
      image: villager.image_uri,
    }));
  }

  async getVillagers() {
    try {
      const response = await ajax.fetch(`${VILLAGERS_ENDPOINT}`);
      const dataApi = await response.json();

      const villagers = this.__filterVillagersData(dataApi);
      return villagers;
    } catch (error) {
      return null;
    }
  }
}

export const acnhApi = new AcnhApi();
