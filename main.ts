// Placeholder driver: renders every case in /input/cases.json
// through the stub parser and writes the HTML array to
// /output/html.json. The harness supplies /input; /output
// is created here if it does not exist yet.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { parse } from "./parse.js";

const cases = JSON.parse(readFileSync("/input/cases.json", "utf8"));
const html = cases.map((c) => parse(c.markdown));

mkdirSync("/output", { recursive: true });
writeFileSync("/output/html.json", JSON.stringify(html) + "\n");
