import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In my defense, the sock attacked first — I merely finished what the laundry started.";

// A one-liner: a single line, no leading/trailing whitespace, 1-200 chars.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE !== LINE.trim() ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(`entry must be one line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Exactness check: what landed on disk must be byte-identical to the line.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt does not match the one-liner exactly");
}
