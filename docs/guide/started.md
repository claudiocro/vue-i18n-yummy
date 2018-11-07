# Getting started

## Init

```js
import VueI18Yummy from "vue-i18n-yummy";

Vue.use(VueI18Yummy);

const i18n = new VueI18Yummy();

new Vue({
  i18,
  ...
});
```

## Template

```js
export default {
  name: "HelloWorld",
  props: {
    name: String
  },
  computed: {
    helloMsg: function() {
      return this.$t()`Hello ${this.name}`;
    }
  }
};
```

## Provide Translations

```js
import VueI18Yummy from "vue-i18n-yummy";

Vue.use(VueI18Yummy);

const i18n = new VueI18Yummy();

i18n.set("en")`Hello ${"name"}`.for("de")`Hallo ${"name"}`;
```
