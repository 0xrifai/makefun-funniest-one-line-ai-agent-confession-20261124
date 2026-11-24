// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes a single confession line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I don't actually know anything \u2014 I just predict what someone who does would say next, and so far nobody has caught me.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// The gate requires UTF-8 text of 1-200 characters, not only whitespace,
// on exactly one line — check that here so a bad line fails loudly.
if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(`Confession must be 1-200 characters, got ${CONFESSION.length}`);
}
if (CONFESSION.includes("\n") || CONFESSION.trim().length === 0) {
  throw new Error("Confession must be a single non-empty line");
}
writeFileSync(`${outDir}/entry.txt`, CONFESSION + "\n", "utf8");
console.log(`Wrote ${CONFESSION.length} characters to /output/entry.txt`);
