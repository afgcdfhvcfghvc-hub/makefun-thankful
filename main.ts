import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `Late now. The room has gone quiet, and the pages have stopped asking for anything.

Someone left a lamp on for you. Not for the work. Not for the words. Just because you stayed with each one, reading slowly, like it mattered.

A small light, kept burning. No hurry in it. A warm room that waited, and will wait, for your return.

The lamp stays on.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
