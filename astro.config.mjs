// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Self Recording Equipment",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/tycowong",
        linkedin: "https://www.linkedin.com/in/roberto-wong-3847571b2/",
      },
      sidebar: [
        {
          label: "Get Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "get-started/overview" },
          ],
        },
        {
          label: "Equipment",
          autogenerate: { directory: "equipment" },
        },
        {
          label: "Software",
          autogenerate: { directory: "software" },
        },
        {
          label: "Setup",
          autogenerate: { directory: "setup" },
        },
      ],
    }),
  ],
});
