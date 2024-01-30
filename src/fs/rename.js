import { existsSync } from "node:fs";
import fsPromises from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const source = join(__dirname, "files/wrongFilename.txt");
  const destination = join(__dirname, "files/properFilename.md");

  if (!existsSync(source) || existsSync(destination)) {
    throw new Error("FS operation failed");
  }

  try {
    await fsPromises.rename(source, destination);
    log("File is successfully renamed");
  } catch (e) {
    throw new Error(e);
  }
};

await rename();
