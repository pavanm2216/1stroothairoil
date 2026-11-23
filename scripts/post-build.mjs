import { readdirSync, writeFileSync } from "fs";

const assets = readdirSync("dist/assets");
const js = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const css = assets.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

writeFileSync(
  "dist/index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>1st ROOT — Vedam of Hair | Botanical Hair Oil Ritual</title>
    <meta name="description" content="From Himalayan roots to a single golden drop. Discover 1st ROOT, a slowly prepared botanical hair-oil ritual." />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${js}"></script>
  </body>
</html>
`,
);

writeFileSync("dist/_redirects", "/* /index.html 200\n");

console.log(`✓ dist/index.html and dist/_redirects written (${js}, ${css})`);
