export class LocalStorageController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (!localStorageData) {
      return defaultValue;
    }
    return JSON.parse(localStorageData);
  };

  set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };
}
