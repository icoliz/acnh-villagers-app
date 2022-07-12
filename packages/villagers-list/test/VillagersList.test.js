import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';

import { VillagersList } from '../index.js';
import { VillagerInfo } from '../../villager-info/index.js';
import { villagers, wishlist_mock, my_villagers_mock } from './mocks.js';

describe('VillagersList', () => {
  const scopedElements = { 'villagers-list': VillagersList };
  const scopedFixture = (template) => fixture(template, { scopedElements });

  let setLocalStorageSpy;
  let wishlist = [];
  let myVillagers = [];

  beforeEach(() => {
    wishlist = wishlist_mock.slice(0);
    myVillagers = my_villagers_mock.slice(0);
    setLocalStorageSpy = spy(window.localStorage, 'setItem');
  });

  afterEach(() => {
    wishlist = [];
    myVillagers = [];
    setLocalStorageSpy.restore();
  });

  it('should be accessible', async () => {
    const element = await scopedFixture(
      html`<villagers-list .villagers=${villagers}></villagers-list>`
    );

    expect(element).to.be.accessible();
  });

  it('should return VillagerInfo component if there are villagers', async () => {
    const element = await scopedFixture(
      html`<villagers-list .villagers=${villagers}></villagers-list>`
    );
    const villagerInfo = element.shadowRoot.querySelector(
      '[data-testid="villagers-ul"]'
    );

    expect(villagerInfo).to.exist;
  });

  it('should return nothing if there are no villagers', async () => {
    const element = await scopedFixture(
      html`<villagers-list></villagers-list>`
    );
    const villagerInfo = element.shadowRoot.querySelector(
      '[data-testid="villagers-ul"]'
    );

    expect(villagerInfo).to.be.null;
  });

  // TODO: review tests from this point
  it('should return true if the villager is in the list', async () => {
    const element = await scopedFixture(
      html`<villagers-list></villagers-list>`
    );

    const result = element.isVillagerInList(villagers[1], wishlist);

    expect(result).to.be.true;
  });

  it('should return false if the villager is not in the list', async () => {
    const element = await scopedFixture(
      html`<villagers-list></villagers-list>`
    );

    const result = element.isVillagerInList(villagers[1], myVillagers);

    expect(result).to.be.false;
  });

  //Wishlist -- add villager to wishlist
  it('should add villager to wishlist if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_wishlist)
    );

    expect(element.wishlist.length).to.be.equal(3);
  });

  it('should call local storage to set wishlist if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_wishlist)
    );

    expect(setLocalStorageSpy.called).to.be.true;
  });

  it('should trigger an update if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    const requestUpdateSpy = spy(element, 'requestUpdate');

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_wishlist)
    );

    expect(requestUpdateSpy.called).to.be.true;
  });

  // Wishlist -- remove villager from wishlist
  it('should remove a villager from wishlist if it is already in it', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_wishlist)
    );

    expect(element.wishlist.length).to.be.equal(1);
  });

  it('should call local storage to set wishlist if the the villager is already saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_wishlist)
    );

    expect(setLocalStorageSpy.called).to.be.true;
  });

  it('should trigger an update if the villager is already saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .wishlist=${wishlist}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    const requestUpdateSpy = spy(element, 'requestUpdate');

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_wishlist)
    );

    expect(requestUpdateSpy.called).to.be.true;
  });

  //myVillagers -- add villager to myVillagers
  it('should add villager to myVillagers if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_my_villager)
    );

    expect(element.myVillagers.length).to.be.equal(3);
  });

  it('should call local storage to set myVillagers if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_my_villager)
    );

    expect(setLocalStorageSpy.called).to.be.true;
  });

  it('should trigger an update if the villager is not saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-74"]`
    );

    const requestUpdateSpy = spy(element, 'requestUpdate');

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.add_my_villager)
    );

    expect(requestUpdateSpy.called).to.be.true;
  });

  //myVillagers -- remove villager from myVillagers
  it('should remove a villager from myVillagers if it is already in it', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_my_villager)
    );

    expect(element.myVillagers.length).to.be.equal(1);
  });

  it('should call local storage to set myVillagers if the the villager is already saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_my_villager)
    );

    expect(setLocalStorageSpy.called).to.be.true;
  });

  it('should trigger an update if the villager is already saved in list', async () => {
    const element = await scopedFixture(
      html`<villagers-list
        .villagers=${villagers}
        .myVillagers=${myVillagers}
      ></villagers-list>`
    );

    const villagerInfo = element.shadowRoot.querySelector(
      `[data-testid="villager-info-48"]`
    );

    const requestUpdateSpy = spy(element, 'requestUpdate');

    villagerInfo.dispatchEvent(
      new CustomEvent(VillagerInfo.events.remove_my_villager)
    );

    expect(requestUpdateSpy.called).to.be.true;
  });
});
