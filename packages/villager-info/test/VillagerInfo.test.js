import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { localize } from '@lion/localize';

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

  it('should return the villager name in English when language is set to "en-GB"', async () => {
    localize.locale = 'en-GB';

    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );

    const villagerImg = element.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    expect(villagerImg.alt).to.equal(`Picture of ${villager.nameEN}`);
  });

  it('should return the villager name in Spanish when language is set to "es-ES"', async () => {
    localize.locale = 'es-ES';

    const element = await scopedFixture(
      html`<villager-info .villager=${villager}></villager-info>`
    );

    const villagerImg = element.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    expect(villagerImg.alt).to.equal(`Imagen de ${villager.nameES}`);
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

  it('should render villager with wishlist button', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${true}
      ></villager-info>`
    );

    const wishlistButton = element.shadowRoot.querySelector(
      '[data-testid="wishlist-button-add"]'
    );

    expect(wishlistButton).to.exist;
  });

  it('should render villager without wishlist button', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${false}
      ></villager-info>`
    );

    const wishlistButton = element.shadowRoot.querySelector(
      '[data-testid="wishlist-button"]'
    );

    expect(wishlistButton).to.be.null;
  });

  it('should render villager with my-villagers button', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showMyVillagersButton=${true}
      ></villager-info>`
    );

    const myVillagersButton = element.shadowRoot.querySelector(
      '[data-testid="my-villagers-button-add"]'
    );

    expect(myVillagersButton).to.exist;
  });

  it('should render villager without my-villagers button', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showMyVillagersButton=${false}
      ></villager-info>`
    );

    const myVillagersButton = element.shadowRoot.querySelector(
      '[data-testid="my-villagers-button"]'
    );

    expect(myVillagersButton).to.be.null;
  });

  it(`should dispatch ${VillagerInfo.events.add_wishlist} event when wishlist button-ADD is clicked`, async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .isInWishlist=${false}
      ></villager-info>`
    );

    const wishlistButton = element.shadowRoot.querySelector(
      '[data-testid="wishlist-button-add"]'
    );

    setTimeout(() => wishlistButton.click());

    const clickAddWishlist = await oneEvent(
      element,
      VillagerInfo.events.add_wishlist
    );

    await expect(clickAddWishlist).to.exist;
  });

  it(`should dispatch ${VillagerInfo.events.remove_wishlist} event when wishlist button-REMOVE is clicked`, async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .isInWishlist=${true}
      ></villager-info>`
    );

    const wishlistButton = element.shadowRoot.querySelector(
      '[data-testid="wishlist-button-remove"]'
    );

    setTimeout(() => wishlistButton.click());

    const clickAddWishlist = await oneEvent(
      element,
      VillagerInfo.events.remove_wishlist
    );

    await expect(clickAddWishlist).to.exist;
  });

  it(`should dispatch ${VillagerInfo.events.add_my_villager} event when my villagers button-ADD is clicked`, async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .isInMyVillagersList=${false}
      ></villager-info>`
    );

    const myVillagersButton = element.shadowRoot.querySelector(
      '[data-testid="my-villagers-button-add"]'
    );

    setTimeout(() => myVillagersButton.click());

    const clickAddMyVillager = await oneEvent(
      element,
      VillagerInfo.events.add_my_villager
    );

    await expect(clickAddMyVillager).to.exist;
  });

  it(`should dispatch ${VillagerInfo.events.remove_my_villager} event when my villagers button-REMOVE is clicked`, async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .isInMyVillagersList=${true}
      ></villager-info>`
    );

    const myVillagersButton = element.shadowRoot.querySelector(
      '[data-testid="my-villagers-button-remove"]'
    );

    setTimeout(() => myVillagersButton.click());

    const clickAddMyVillager = await oneEvent(
      element,
      VillagerInfo.events.remove_my_villager
    );

    await expect(clickAddMyVillager).to.exist;
  });
});
