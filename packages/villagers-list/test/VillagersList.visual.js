import { visualDiff } from "@web/test-runner-visual-regression";
import { html, aTimeout, fixture, waitUntil } from "@open-wc/testing";

import { VillagersList } from "../index.js";

const villagers = [
  {
    birthday: "11/4",
    birthday_string: "April 11th",
    gender: "Male",
    icon: "/.web-test-runner/assets/img/punchy.png",
    id: 48,
    image: "/.web-test-runner/assets/img/punchy.png",
    nameCN: "尔光",
    nameDE: "Julian",
    nameEN: "Punchy",
    nameES: "Félix",
    personality: "Lazy",
    species: "Cat",
  },
  {
    birthday: "17/3",
    birthday_string: "March 17th",
    gender: "Female",
    icon: "/.web-test-runner/assets/img/cheri.png",
    id: 74,
    image: "/.web-test-runner/assets/img/cheri.png",
    nameCN: "樱桃",
    nameDE: "Claudia",
    nameEN: "Cheri",
    nameES: "Cerecita",
    personality: "Peppy",
    species: "Cub",
  },
];

describe("VillagersList", () => {
  const scopedElements = { "villagers-list": VillagersList };
  const scopedFixture = (template) =>
    fixture(
      html`<div style="background-color: #fff; padding: 16px">
        ${template}
      </div>`,
      { scopedElements }
    );

  it("should render villagers list with villagers", async () => {
    const element = await scopedFixture(
      html`<villagers-list .villagers=${villagers}></villagers-list>`
    );

    const villagersListEl = element.querySelector("villagers-list");
    await aTimeout(200);

    const punchyInfo = villagersListEl.shadowRoot.querySelector(
      '[data-testid="villager-info-48"]'
    );
    const cheriInfo = villagersListEl.shadowRoot.querySelector(
      '[data-testid="villager-info-48"]'
    );

    const punchyImg = punchyInfo.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );
    const cheriImg = cheriInfo.shadowRoot.querySelector(
      '[data-testid="villager-img"]'
    );

    await waitUntil(() => punchyImg);
    await waitUntil(() => cheriImg);

    await visualDiff(element, "villagers-list/with-villagers");
  });

  it("should render villagers list without villagers", async () => {
    const element = await scopedFixture(
      html`<villagers-list></villagers-list>`
    );

    await visualDiff(element, "villagers-list/without-villagers");
  });
});
