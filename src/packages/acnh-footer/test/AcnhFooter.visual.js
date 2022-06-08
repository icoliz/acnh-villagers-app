import { visualDiff } from '@web/test-runner-visual-regression';
import { AcnhFooter } from '../index.js';

if (!customElements.get('acnh-footer')) {
  customElements.define('acnh-footer', AcnhFooter);
}

describe('AcnhFooter', () => {
  it('should render header', async () => {
    const element = document.createElement('acnh-footer');
    document.body.appendChild(element);

    await visualDiff(element, 'acnh-footer');
  });
});
