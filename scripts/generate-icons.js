/**
 * Regenerate src/data/skill-icons.ts after adding new skill slugs.
 * Run: node scripts/generate-icons.js
 * Requires: npm install -D simple-icons
 */
const fs = require("fs");
const path = require("path");

const slugs = [
  "react", "nextdotjs", "angular", "flutter", "javascript", "typescript",
  "html5", "css3", "redux", "bootstrap", "mui", "antdesign", "vite",
  "nodedotjs", "express", "nestjs", "graphql", "openapiinitiative", "docker",
  "mysql", "postgresql", "mongodb", "redis", "googlecloud", "googlecloudstorage",
  "googlebigquery", "googledataflow", "amazonwebservices", "awsamplify",
  "socketdotio", "firebase", "apachekafka", "rabbitmq", "linux", "githubactions",
  "ethereum", "web3dotjs", "openai", "anthropic", "githubcopilot", "twilio",
  "webrtc", "git", "github", "bitbucket", "jira", "postman", "cisco", "coursera",
];

let simpleIcons;
try {
  simpleIcons = require("simple-icons");
} catch {
  console.error("Install simple-icons: npm install -D simple-icons");
  process.exit(1);
}

const unique = [...new Set(slugs)];
const out = {};

for (const slug of unique) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  const icon = simpleIcons[key];
  if (icon) {
    out[slug] = { path: icon.path, hex: icon.hex, title: icon.title };
  }
}

const content = `// Auto-generated — run: node scripts/generate-icons.js
export type IconData = { path: string; hex: string; title: string };

export const skillIconMap: Record<string, IconData> = ${JSON.stringify(out, null, 2)};
`;

const outPath = path.join(__dirname, "..", "src", "data", "skill-icons.ts");
fs.writeFileSync(outPath, content);
console.log(`Wrote ${Object.keys(out).length} icons to src/data/skill-icons.ts`);
