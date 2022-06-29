import { visualDiff } from '@web/test-runner-visual-regression';
import { html, fixture, waitUntil } from '@open-wc/testing';

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
  const scopedFixture = (template) =>
    fixture(
      html`
        <div style="background-color: #fff; padding: 16px">${template}</div>
      `,
      { scopedElements }
    );

  it('should render a villager with wishlist button-ADD and my-villagers button-ADD', async () => {
    const element = await scopedFixture(html`
      <villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .showMyVillagersButton=${true}
      ></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(
      element,
      'villager-info/with-villager-wishlist-ADD-my-villagers-ADD'
    );
  });

  it('should render a villager with wishlist button-ADD and my-villagers button-REMOVE', async () => {
    const element = await scopedFixture(html`
      <villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .isInWishlist=${false}
        .showMyVillagersButton=${true}
        .isInMyVillagersList=${true}
      ></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(
      element,
      'villager-info/with-villager-wishlist-ADD-my-villagers-REMOVE'
    );
  });

  it('should render a villager with wishlist button-REMOVE and my-villagers button-ADD', async () => {
    const element = await scopedFixture(html`
      <villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .isInWishlist=${true}
        .showMyVillagersButton=${true}
        .isInMyVillagersList=${false}
      ></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(
      element,
      'villager-info/with-villager-wishlist-REMOVE-my-villagers-ADD'
    );
  });

  it('should render a villager with wishlist button-REMOVE and my-villagers button-REMOVE', async () => {
    const element = await scopedFixture(html`
      <villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .isInWishlist=${true}
        .showMyVillagersButton=${true}
        .isInMyVillagersList=${true}
      ></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(
      element,
      'villager-info/with-villager-wishlist-REMOVE-my-villagers-REMOVE'
    );
  });

  it('should render a villager with wishlist button-ADD ', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .isInWishlist=${false}
        .showMyVillagersButton=${false}
      ></villager-info>`
    );

    await visualDiff(element, 'villager-info/with-villager-wishlist-ADD');
  });

  it('should render a villager with wishlist button-REMOVE', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${true}
        .isInWishlist=${true}
        .showMyVillagersButton=${false}
      ></villager-info>`
    );

    await visualDiff(element, 'villager-info/with-villager-wishlist-REMOVE');
  });

  it('should render a villager with my-villagers button-ADD', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${false}
        .showMyVillagersButton=${true}
        .isInMyVillagersList=${false}
      ></villager-info>`
    );

    await visualDiff(element, 'villager-info/with-villager-my-villagers-ADD');
  });

  it('should render a villager with my-villagers button-REMOVE', async () => {
    const element = await scopedFixture(
      html`<villager-info
        .villager=${villager}
        .showWishlistButton=${false}
        .showMyVillagersButton=${true}
        .isInMyVillagersList=${true}
      ></villager-info>`
    );

    await visualDiff(
      element,
      'villager-info/with-villager-my-villagers-REMOVE'
    );
  });

  it('should render a villager without buttons', async () => {
    const element = await scopedFixture(html`
      <villager-info
        .villager=${villager}
        .showWishlistButton=${false}
        .showMyVillagersButton=${false}
      ></villager-info>
    `);

    await waitUntil(() => element.querySelector('villager-info'));

    await visualDiff(element, 'villager-info/with-villager-no-buttons');
  });

  it('should render no villager', async () => {
    const element = await scopedFixture(html`<villager-info></villager-info>`);

    await visualDiff(element, 'villager-info/without-villager');
  });
});
