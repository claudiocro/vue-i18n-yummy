import Vue from "vue";
import { expect } from "chai";
import { install } from "../../src/install";
import I18n from "../../src/i18n";
import yummy, { set } from "../../src/yummy";

function nextTick() {
  return new Promise(resolve => Vue.nextTick(resolve));
}

describe("vue-i18n-yummy", () => {
  it("be present after install", () => {
    expect(new Vue().$t).to.be.undefined;
    Vue.use({ install });
    expect(new Vue().$t).to.be.not.undefined;
  });

  describe("translates correctly", () => {
    it("show the key", async () => {
      const el = document.createElement("div");
      const i18n = new I18n();

      i18n.set("en")`Hello ${"name"}`.for("de")`Hallo ${"name"}`;

      const name = "Joe";
      const vm = new Vue({
        i18n,
        render(h) {
          return h("p", { ref: "text" }, [this.$t()`Hello ${name}`]);
        }
      }).$mount(el);

      expect(vm.$refs.text.textContent).to.equal("Hello Joe");
      i18n.locale = "de";
      await nextTick();
      expect(vm.$refs.text.textContent).to.equal("Hallo Joe");
    });
  });
});

describe("yummy", () => {
  it("should work", () => {
    yummy.db = {};
    set("en")`Hello ${"name"}`.for("de")`Hallo ${"name"}`;

    const name = "Hans";
    expect(yummy("en")`Hello ${name}`).to.equal("Hello Hans");
    expect(yummy("de")`Hello ${name}`).to.equal("Hallo Hans");
  });
});
