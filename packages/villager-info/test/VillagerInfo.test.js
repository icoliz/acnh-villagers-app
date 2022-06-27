import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { VillagerInfo } from '../index.js';

const villager = {
  birthday: '17/3',
  birthday_string: 'March 17th',
  gender: 'Female',
  icon: '/.web-test-runner/assets/img/cheri.png',
  id: 74,
  image: '/.web-test-runner/assets/img/cheri.png',
  nameCN: '樱桃',
  nameDE: 'Claudia',
  nameEN: 'Cheri',
  nameES: 'Cerecita',
  personality: 'Peppy',
  species: 'Cub',
};

describe('VillagerInfo', () => {
  const scopedElements = { 'villager-info': VillagerInfo };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );

    await expect(element).to.be.accessible();
  });

  it('should render a villager element if a villager is passed', async () => {
    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );
    const villagerElement = element.shadowRoot.querySelector(
      '[data-testid="villager-element"]'
    );

    await expect(villagerElement).to.exist;
  });

  it('should render nothing if villager object is empty', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);

    const villagerElement = element.shadowRoot.querySelector(
      '[data-testid="villager-element"]'
    );

    await expect(villagerElement).to.be.null;
  });

  // TODO: to review
  it('should dispatch add-my-villager event when my villagers button is clicked', async () => {
    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );

    const myVillagersButton = element.shadowRoot.querySelector(
      '[data-testid="my-villager-button"]'
    );

    setTimeout(() => myVillagersButton.click());

    const clickAddMyVillager = await oneEvent(
      element,
      VillagerInfo.events.add_my_villager
    );

    await expect(clickAddMyVillager).to.exist;
  });

  // TODO: to review
  it('should dispatch add-wishlist event when wishlist button is clicked', async () => {
    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );

    const wishlistButton = element.shadowRoot.querySelector(
      '[data-testid="wishlist-button"]'
    );

    setTimeout(() => wishlistButton.click());

    const clickAddWishlist = await oneEvent(
      element,
      VillagerInfo.events.add_wishlist
    );

    await expect(clickAddWishlist).to.exist;
  });
});
