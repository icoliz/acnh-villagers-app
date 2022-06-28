import { html, fixture } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';
import { AcnhFooter } from '../index.js';

describe('AcnhFooter', () => {
  const scopedElements = { 'acnh-footer': AcnhFooter };
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it('should render footer', async () => {
    const element = await scopedFixture(html`<acnh-footer></acnh-footer>`);

    await visualDiff(element, 'acnh-footer/acnh-footer');
  });
});
