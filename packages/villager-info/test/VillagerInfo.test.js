import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import { VillagerInfo } from '../index.js';

describe('VillagerInfo', () => {
  const scopedElements = { 'villager-info': VillagerInfo };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);

    await expect(element).to.be.accessible();
  });

  it('should render a villager image', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);
    const villagerImg = element.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => villagerImg !== null);

    await expect(villagerImg).to.exist;
  });
});
