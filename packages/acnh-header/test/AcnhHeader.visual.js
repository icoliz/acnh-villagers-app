import { html, fixture } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';
import { AcnhHeader } from '../index.js';

describe('AcnhHeader', () => {
  const scopedElements = { 'acnh-header': AcnhHeader };
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it('should render header', async () => {
    const element = await scopedFixture(html`<acnh-header></acnh-header>`);

    await visualDiff(element, 'acnh-header/acnh-header');
  });
});
