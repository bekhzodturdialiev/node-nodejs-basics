import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const source = join(__dirname, "files/fileToRead.txt");

  if (!existsSync(source)) {
    throw new Error("FS operation failed");
  }

  try {
    const contents = await readFile(source, { encoding: "utf8" });
    log(contents);
  } catch (e) {
    throw new Error(e);
  }
};

await read();
