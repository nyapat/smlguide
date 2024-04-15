import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Town of Salem 2 Modding",
  base: "/smlguide/",
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: "Home",
        children: ["/", "/guide/setup.md"],
      },
      {
        text: "Creating Your Mod",
        children: [
          "/guide/creating-your-mod/creating-your-project.md",
          "/guide/creating-your-mod/compiling-your-project.md",
        ],
      },
    ],
    navbar: [
      {
        text: "Mod Guides",
        children: [
          {
            text: "Text Editor",
            link: "/mod-guides/text-editor.md",
          },
        ],
      },
    ],
  }),
});
