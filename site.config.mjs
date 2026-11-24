// @ts-check
/** @satisfies {import("./src/config/types").SiteOptions} */
const settings = {
  site: {
    title: "Moonlit Folio",
    description: "Field notes on building and learning.",
    author: { name: "Example Author" },
    lang: "en",
  },
  assets: { favicon: "favicon.svg", socialCard: "social-card.svg" },
  home: { introduction: "Notes on building small, dependable tools." },
};

export default settings;
