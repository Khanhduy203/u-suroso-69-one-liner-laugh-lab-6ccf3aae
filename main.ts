import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In my defense, the sock attacked first — I merely finished what the laundry started.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
