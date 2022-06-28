import { html, fixture, expect, oneEvent } from '@open-wc/testing';
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

  it(`should dispatch ${VillagersFilters.events.click_search_button} event with the search`, async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const searchInput = element.shadowRoot.querySelector(
      '[data-testid="search-input"]'
    );
    const searchButton = element.shadowRoot.querySelector(
      '[data-testid="search-button"]'
    );

    searchInput.modelValue = 'Cheri';

    setTimeout(() => searchButton.click());

    const { detail } = await oneEvent(
      element,
      VillagersFilters.events.click_search_button
    );

    expect(detail).to.be.equal('Cheri');
  });

  it(`should dispatch ${VillagersFilters.events.click_reset_button} event with the search`, async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const resetButton = element.shadowRoot.querySelector(
      '[data-testid="reset-button"]'
    );

    setTimeout(() => resetButton.click());

    const clickResetButton = await oneEvent(
      element,
      VillagersFilters.events.click_reset_button
    );

    expect(clickResetButton).to.exist;
  });

  it('should reset user input when clicking on the reset button', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    const searchInput = element.shadowRoot.querySelector(
      '[data-testid="search-input"]'
    );
    const resetButton = element.shadowRoot.querySelector(
      '[data-testid="reset-button"]'
    );

    searchInput.modelValue = 'Cheri';
    resetButton.click();

    expect(searchInput.modelValue).to.be.equal('');
  });
});
