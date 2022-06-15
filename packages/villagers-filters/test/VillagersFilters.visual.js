import { visualDiff } from '@web/test-runner-visual-regression';
import { VillagersFilters } from '../index.js';

if (!customElements.get('villagers-filters')) {
  customElements.define('villagers-filters', VillagersFilters);
}

describe('VillagersFilters', () => {
  it('should render input and button to filter villagers', async () => {
    const element = document.createElement('villagers-filters');
    document.body.appendChild(element);

    await visualDiff(element, 'villagers-filters');
  });
});
