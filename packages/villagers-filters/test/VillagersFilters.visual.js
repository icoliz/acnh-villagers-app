import { html, fixture } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

import { VillagersFilters } from '../index.js';

describe('VillagersFilters', () => {
  const scopedElements = { 'villagers-filters': VillagersFilters };
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it('should render input and button to filter villagers', async () => {
    const element = await scopedFixture(
      html`<villagers-filters></villagers-filters>`
    );

    await visualDiff(element, 'villagers-filters/villagers-filters');
  });
});
