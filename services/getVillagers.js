import { ajax } from '@lion/ajax';

export const VILLAGERS_ENDPOINT = 'http://acnhapi.com/v1/villagers/';

export class AcnhApi {
  filterVillagersData = (data) => {
    return data.map((villager) => ({
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
  };

  getVillagers = async () => {
    try {
      const response = await ajax.fetch(`${VILLAGERS_ENDPOINT}`);
      const dataApi = await response.json();

      const dataApiArray = Object.values(dataApi);

      const villagers = this.filterVillagersData(dataApiArray);
      return villagers;
    } catch (error) {
      return null;
    }
  };
}

export const acnhApi = new AcnhApi();
