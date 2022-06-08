import { visualDiff } from '@web/test-runner-visual-regression';
import { AcnhHeader } from '../index.js';

if (!customElements.get('acnh-header')) {
  customElements.define('acnh-header', AcnhHeader);
}

describe('AcnhHeader', () => {
  it('should render header', async () => {
    const element = document.createElement('acnh-header');
    document.body.appendChild(element);

    await visualDiff(element, 'acnh-header');
  });
});
