import { html, fixture, expect, oneEvent, waitUntil } from '@open-wc/testing';
import { VillagersFilters } from '../index.js';

describe('VillagersFilters', () => {
  const scopedElements = { 'villagers-filters': VillagersFilters };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    await expect(element).to.be.accessible();
  });

  // Review this test
  it('should dispatch click-search-button event with the search', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const clickSearchButton = () =>
      element.shadowRoot.querySelector('[data-testid="search-button"]').click();
    setTimeout(clickSearchButton);

    const { detail } = await oneEvent(
      element,
      VillagersFilters.events.click_search_button
    );

    // Review this test. Detail exists. Should it be specific?? How to show the detail
    expect(detail).to.exist;
  });
});
