import { expect } from '@open-wc/testing';
import { createSandbox } from 'sinon';

import { acnhApi } from '../AcnhApi.js';
import { villagers_api_mock, villagers_mock } from './mocks.js';

let sandbox;
let stub;

describe('AcnhApi', () => {
  beforeEach(() => {
    sandbox = createSandbox();
    stub = sandbox.stub(window, 'fetch');
  });

  afterEach(() => {
    sandbox.restore();
    sandbox = null;
  });

  it('should return villagers data when promise is resolved', async () => {
    const resolvedPromise = stub.resolves(villagers_api_mock);

    const response = await resolvedPromise();

    expect(response).to.be.deep.equal(villagers_api_mock);
  });

  it('should return null when the promise is rejected', async () => {
    const rejectedPromise = stub.resolves(null);

    const response = await rejectedPromise();

    // TODO: How to test the 'catch' part?
    expect(response).to.be.null;
  });

  it('should filter villagers data', async () => {
    const filteredVillagers = acnhApi.__filterVillagersData(villagers_api_mock);

    expect(filteredVillagers).to.be.deep.equal(villagers_mock);
  });
});
