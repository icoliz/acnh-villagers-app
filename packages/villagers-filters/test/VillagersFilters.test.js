import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { VillagersFilters } from '../index.js';

describe('VillagersFilters', () => {
  const scopedElements = { 'villagers-filters': VillagersFilters };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  xit('should be accessible', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    await expect(element).to.be.accessible();
  });

  it('should dispatch click-search-button event with the search', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const searchInput = element.shadowRoot.querySelector(
      '[data-testid="search-input"]'
    );
    searchInput.modelValue = 'Cheri';

    const clickSearchButton = () =>
      element.shadowRoot.querySelector('[data-testid="search-button"]').click();
    setTimeout(clickSearchButton);

    const { detail } = await oneEvent(
      element,
      VillagersFilters.events.click_search_button
    );

    expect(detail).to.be.equal('Cheri');
  });
});
