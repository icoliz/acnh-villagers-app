import { visualDiff } from '@web/test-runner-visual-regression';
import { html, fixture } from '@open-wc/testing';

import { Link } from '../index.js';

describe('AppLink', () => {
  const scopedElements = { 'app-link': Link };
  const scopedFixture = (template) =>
    fixture(
      html`
        <div style="background-color: #fff; padding: 16px">${template}</div>
      `,
      { scopedElements }
    );

  it('should render a link', async () => {
    const element = await scopedFixture(
      html`<app-link href="/my-villagers">My villagers</app-link>`
    );

    await visualDiff(element, 'app-link/app-link');
  });
});
