import { html, fixture, expect } from '@open-wc/testing';
import { Link } from '../index.js';
import { spy as sinonSpy } from 'sinon';

describe('AppLink', () => {
  const scopedElements = { 'app-link': Link };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should have href attribute', async () => {
    const element = await scopedFixture(html`<app-link></app-link>`);

    const link = element.shadowRoot.querySelector('[data-testid="link"]');

    expect(link).to.have.attribute('href');
  });

  it('should call navigate when the link is clicked', async () => {
    const element = await scopedFixture(html`<app-link></app-link>`);

    element.href = 'my-villagers';

    const clickLink = element.shadowRoot
      .querySelector('[data-testid="link"]')
      .click();
    setTimeout(clickLink);

    const navigator = sinonSpy(window.navigator, 'navigate');

    expect(navigator.called()).to.be.true;
  });
});
