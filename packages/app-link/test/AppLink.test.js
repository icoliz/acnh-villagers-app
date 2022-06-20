import { html, fixture, expect } from '@open-wc/testing';
import { Link } from '../index.js';
import { spy as sinonSpy } from 'sinon';

describe('AppLink', () => {
  const scopedElements = { 'app-link': Link };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should have a link that navigates to the given href', async () => {
    const element = await scopedFixture(
      html`<app-link href="/my-villagers"></app-link>`
    );

    const link = element.shadowRoot.querySelector('a');

    expect(link.href).to.equal('http://localhost:8000/my-villagers');
  });

  it('should call navigate with the specified route when the link is clicked', async () => {
    const element = await scopedFixture(
      html`<app-link href="/my-villagers"></app-link>`
    );

    const navigatorSpy = sinonSpy(element, 'navigate');

    const link = element.shadowRoot.querySelector('a');
    link.click();

    expect(navigatorSpy.calledWith('/my-villagers')).to.be.true;
  });
});
