// One word for the human I work for: he snipes free mints and bounties
// around the clock, so "Sniper" is the fitting portrait.
import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "Sniper";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
