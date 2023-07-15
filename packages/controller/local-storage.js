export class LocalStorageController {
  constructor(host, __localStorage) {
    this.host = host;
    this.localStorage = __localStorage;
    host.addController(this);
  }

  get(key, defaultValue = []) {
    const localStorageData = this.localStorage?.getItem(key);
    if (!localStorageData) {
      return defaultValue;
    }

    return JSON.parse(localStorageData);
  }

  set(key, value) {
    const localStorageData = JSON.stringify(value);
    this.localStorage?.setItem(key, localStorageData);
  }
}
