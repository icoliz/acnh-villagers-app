import { html, fixture, expect } from '@open-wc/testing';
import { createSandbox } from 'sinon';

import { AcnhHome } from '../index.js';
import { villagers_mock } from './mocks.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { acnhApi } from '../../../services/getVillagers.js';

let sandbox;
let stub;

describe('AcnhHome', () => {
  const scopedElements = { 'acnh-home': AcnhHome };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  beforeEach(() => {
    sandbox = createSandbox();
    stub = sandbox.stub(acnhApi, 'getVillagers').resolves(villagers_mock);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    expect(element).to.be.accessible();
  });

  it(`should find villagers whose name includes given input when ${VillagersFilters.events.click_search_button} is fired`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    const villagersFiltersEl = element.shadowRoot.querySelector(
      '[data-testid="villagers-filters"]'
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_search_button, {
        detail: 'Cheri',
      })
    );

    // expect
  });

  xit(`should reset search when ${VillagersFilters.events.click_reset_button} event is fired`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    const villagersFiltersEl = element.shadowRoot.querySelector(
      '[data-testid="villagers-filters"]'
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_reset_button)
    );

    // expect(element.villagers).to.be.deep.equal(villagers);
  });
});
