export function install(Vue) {
  Vue.prototype.$t = function(key) {
    return `${key}`;
  };
}
