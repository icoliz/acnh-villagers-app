import { ajax } from '@lion/ajax';

export const getVillagers = async () => {
  // TODO: turn into function. how to do in the context of async await?
  try {
    const response = await ajax.fetch('http://acnhapi.com/v1/villagers/');
    const dataApi = await response.json();

    const dataApiArray = Object.values(dataApi);

    const mapApiData = (data) => {
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

    const villagers = mapApiData(dataApiArray);

    console.log(villagers[0]);
    return villagers;
  } catch (error) {
    return null;
  }
};
