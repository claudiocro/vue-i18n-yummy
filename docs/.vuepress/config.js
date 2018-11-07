const pkg = require("../../package.json");

module.exports = {
  base: "/vue-i18n-yummy/",
  title: pkg.name,
  description: pkg.description,

  themeConfig: {
    repo: "claudiocro/vue-i18n-yummy",
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        nav: [
          {
            text: "Guide",
            link: "/guide/started.md"
          }
        ],
        sidebar: [
          "/installation.md",
          {
            title: "Guide",
            collapsable: false,
            children: ["/guide/started.md"]
          }
        ]
      }
    }
  }
};
