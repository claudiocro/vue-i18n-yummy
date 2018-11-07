// code by:
// https://github.com/WebReflection/i18n-yummy
// https://github.com/WebReflection/i18n-utils
// https://codeburst.io/easy-i18n-in-10-lines-of-javascript-poc-eb9e5444d71e

export default function i18n(locale) {
  return function(template) {
    for (
      var k = template.join("\x01"),
        info = ((i18n.db || {})[k] || {})[locale] || { v: [] },
        t = info.t || template,
        out = [t[0]],
        i = 1,
        length = t.length;
      i < length;
      i++
    )
      out[i] = arguments[1 + (info.v[i - 1] || 0)] + t[i];
    return out.join("");
  };
}

export const set = locale => (tCurrent, ...rCurrent) => {
  const key = tCurrent.join("\x01");
  let db = i18n.db[key] || (i18n.db[key] = {});
  db[locale] = {
    t: null,
    v: rCurrent.map((value, i) => i)
  };
  const config = {
    for: other => (tOther, ...rOther) => {
      db[other] = {
        t: tOther.slice(),
        v: rOther.map((value, i) => rCurrent.indexOf(value))
      };
      return config;
    }
  };
  return config;
};
