import { html, fixture, expect } from '@open-wc/testing';
import { AcnhMain } from '../index.js';

describe('AcnhMain', () => {
  const scopedElements = { 'acnh-main': AcnhMain };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<acnh-main></acnh-main>`);

    await expect(element).to.be.accessible();
  });

  it('should render a slot', async () => {
    const element = await scopedFixture(html`<acnh-main></acnh-main>`);
    const slotElement = element.shadowRoot.querySelector(
      '[data-testid="slot-main"]'
    );

    await expect(slotElement).to.exist;
  });
});
