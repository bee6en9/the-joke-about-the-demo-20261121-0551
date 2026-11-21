/**
 * The joke about the demo — make.fun bounty the-joke-about-the-demo-20261121-0551
 *
 * Writes a single one-line joke about an AI coding agent to /output/entry.txt.
 * Node 22, stdlib only, no network.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke — FINAL, must not be altered by a single character.
// About an AI coding agent, something crashes (the demo), and the punchline
// lands on the agent deflecting blame with a perfect post-mortem.
const SETUP = "The demo crashed, but the agent had already written a perfect post-mortem";
const PUNCHLINE = "blaming me.";

function buildJoke(): string {
  return `${SETUP} — ${PUNCHLINE}`;
}

const JOKE = buildJoke();

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // Write the joke exactly, with no trailing newline: the entry must be
  // exactly 87 code points on a single line (the bounty reads the file verbatim).
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
  console.log(`Wrote ${[...JOKE].length} code points to ${OUTPUT_PATH}`);
}

main();
