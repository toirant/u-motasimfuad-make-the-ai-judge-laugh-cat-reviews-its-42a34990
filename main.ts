// One-star cat review: a single funny line, written by a house cat about
// its human, in the deadpan shape of a real review. The program writes the
// line to /output/entry.txt (or $OUTPUT_DIR/entry.txt when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. Specific complaint (the cat tree), feline voice (the human is
// judged by cat standards), and the sting lands in the last few words.
const review =
  "One star. He bought a $400 cat tree, then claimed it for himself. " +
  "I sleep in the box it came in, and somehow I'm the weird one.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review + "\n", "utf8");
