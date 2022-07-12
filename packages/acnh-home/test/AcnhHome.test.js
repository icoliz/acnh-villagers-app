import { html, fixture, expect } from '@open-wc/testing';
import { createSandbox } from 'sinon';

import { AcnhHome } from '../index.js';
import { villagers_mock } from './mocks.js';
import { VillagersFilters } from '../../villagers-filters/index.js';
import { AcnhApi } from '../../../services/AcnhApi.js';

let sandbox;

describe('AcnhHome', () => {
  const scopedElements = { 'acnh-home': AcnhHome };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  beforeEach(() => {
    sandbox = createSandbox();
    sandbox.stub(AcnhApi.prototype, 'getVillagers').resolves(villagers_mock);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    expect(element).to.be.accessible();
  });

  it(`should call villagers correctly`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    expect(element.villagersToRender).to.be.deep.equal(villagers_mock);
  });

  it(`should find villagers whose name includes given input (English) when ${VillagersFilters.events.click_search_button} is fired`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    const villagersFiltersEl = element.shadowRoot.querySelector(
      '[data-testid="villagers-filters"]'
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_search_button, {
        detail: villagers_mock[1].nameEN,
      })
    );

    expect(element.villagersToRender).to.be.deep.equal([villagers_mock[1]]);
  });

  it(`should find villagers whose name includes given input (Spanish) when ${VillagersFilters.events.click_search_button} is fired`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    const villagersFiltersEl = element.shadowRoot.querySelector(
      '[data-testid="villagers-filters"]'
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_search_button, {
        detail: villagers_mock[1].nameES,
      })
    );

    expect(element.villagersToRender).to.be.deep.equal([villagers_mock[1]]);
  });

  it(`should reset search when ${VillagersFilters.events.click_reset_button} event is fired`, async () => {
    const element = await scopedFixture(html`<acnh-home></acnh-home>`);

    const villagersFiltersEl = element.shadowRoot.querySelector(
      '[data-testid="villagers-filters"]'
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_search_button, {
        detail: villagers_mock[0].nameES,
      })
    );

    villagersFiltersEl.dispatchEvent(
      new CustomEvent(VillagersFilters.events.click_reset_button)
    );

    expect(element.villagersToRender).to.be.deep.equal(villagers_mock);
  });
});
