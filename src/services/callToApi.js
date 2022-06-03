export const callToApi = async () => {
  const response = await fetch('http://acnhapi.com/v1/villagers/');
  const dataApi = await response.json();
  console.log(dataApi);
  return dataApi;
};
