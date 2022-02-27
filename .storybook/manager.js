import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: create({
    brandTitle: "Stylebase1",
    brandUrl: "https://stylebase.ai",
    brandImage: "/logo.png",
  })
});