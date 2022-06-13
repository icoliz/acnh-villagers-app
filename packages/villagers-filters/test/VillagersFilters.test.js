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

  // TODO: review this test
  it('should save user input into inputValue property', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const searchButton = element.shadowRoot.querySelector(
      '[data-testid="search-input"]'
    );
    searchButton.value = 'Lucky';

    expect(element.inputValue).to.equal('Lucky');
  });

  it('should dispatch click-search-button event with the search', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    // Review this test
    element.inputValue = 'Cheri';

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
