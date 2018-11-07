import Vue from "vue";
import yummy, { set } from "./yummy";
import { install } from "./install";

export default class I18n {
  constructor() {
    this._vm = new Vue({ data: { locale: "en" } });
    this.set = set;

    if (!yummy.db) {
      yummy.db = {};
    }
  }

  get locale() {
    return this._vm.$data.locale;
  }

  set locale(l) {
    this._vm.locale = l;
  }

  t() {
    return yummy(this.locale);
  }
}

I18n.install = install;
