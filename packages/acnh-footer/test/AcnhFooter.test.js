import { html, fixture, expect } from '@open-wc/testing';
import { AcnhFooter } from '../index.js';

describe('AcnhFooter', () => {
  const scopedElements = { 'acnh-footer': AcnhFooter };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<acnh-footer></acnh-footer>`);

    await expect(element).to.be.accessible();
  });
});
