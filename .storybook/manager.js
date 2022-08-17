import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: create({
    brandTitle: "Storybook",
    brandUrl: "https://storybook.js.org/",
    brandImage: "/logo.png",
  })
});