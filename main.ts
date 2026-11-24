import { mkdirSync, writeFileSync } from "node:fs";

// Winner (37 chars, 25/25 PERFECT of 20 drafts): exercise -> exorcise.
// Why it won over runner-up D2 "I finally told him I love ham." (24/25):
// the wrong word "exorcise" is more surprising and specific than "ham"
// (a one-letter swap that can read as a plain typo), and the medical-to-demonic
// flip lands on first read while the line still reads exactly like a real text.
const entry = "The doctor said I need more exorcise.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
