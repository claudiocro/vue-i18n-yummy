import Vue from "vue";
import { expect } from "chai";
import { install } from "../../src/install";

describe("vue-i18n-yummy", () => {
  it("be present after install", () => {
    expect(new Vue().$t).to.be.undefined;
    Vue.use({ install });
    expect(new Vue().$t).to.be.not.undefined;
  });
});
