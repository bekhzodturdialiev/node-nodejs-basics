import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const source = join(__dirname, "files");

  if (!existsSync(source)) {
    throw new Error("FS operation failed");
  }
  
  const files = await readdir(source)
  log(files)
};

await list();
