import { createSandbox } from 'sinon';
import { expect } from '@open-wc/testing';

import { LocalStorageController } from '../local-storage.js';

let sandbox;
let stub;

describe('Local Storage', () => {
  beforeEach(() => {
    sandbox = createSandbox();
    stub = {
      setItem: sandbox.stub(window.localStorage, 'setItem'),
      getItem: sandbox.stub(window.localStorage, 'getItem'),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  // TODO: test mocking localStorage instead of using the function?
  //   How to test get and set functions when the controller is using an element as a host
  it('should return default value if there is no data in localStorage', async () => {
    const myVillagers = [{ nameEN: 'Cheri' }, { nameEN: 'Punchy' }];

    stub.setItem('myVillagers', myVillagers);
    const result = stub.setItem('myVillagers');
  });
});
