#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync } from "node:fs";

const program = new Command();

program
  .name("cliparse")
  .description("small csv to json converter")
  .version("0.2.0");

program
  .command("convert")
  .argument("<file>", "csv file")
  .option("-d, --delimiter <char>", "delimiter", ",")
  .action((file: string, opts: { delimiter: string }) => {
    const raw = readFileSync(file, "utf8").trim();
    const [head, ...rows] = raw.split("\n");
    const cols = head.split(opts.delimiter);
    const out = rows.map((r) =>
      Object.fromEntries(
        r.split(opts.delimiter).map((v, i) => [cols[i], v])));
    console.log(JSON.stringify(out, null, 2));
  });

program.parse();
