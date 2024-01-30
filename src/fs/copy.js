import { existsSync, cp } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const source = join(__dirname, "files");
  const destination = join(__dirname, "files_copy");

  if (!existsSync(source) || existsSync(destination)) {
    throw new Error("FS operation failed");
  }

  const options = { recursive: true };
  cp(source, destination, options, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      log("All files are successfully copied");
    }
  });
};

await copy();
