import { html, fixture, expect } from '@open-wc/testing';
import { AcnhHeader } from '../index.js';

describe('AcnhHeader', () => {
  const scopedElements = { 'acnh-header': AcnhHeader };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<acnh-header></acnh-header>`);

    await expect(element).to.be.accessible;
  });
});
