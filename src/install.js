import Vue from "vue";

export function install(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      const options = this.$options;

      if (options.i18n) {
        this._i18n = options.i18n;
      } else if (options.parent && options.parent._i18n) {
        this._i18n = options.parent._i18n;
      }
    }
  });

  Object.defineProperty(Vue.prototype, "$i18n", {
    get() {
      return this._i18n;
    }
  });

  Vue.prototype.$t = function() {
    return this._i18n.t();
  };
}
