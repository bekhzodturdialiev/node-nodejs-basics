import { existsSync, unlink } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const file = join(__dirname, "files/fileToRemove.txt");

  if (!existsSync(file)) {
    throw new Error("FS operation failed");
  }

  unlink(file, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      log("File is successfully deleted");
    }
  });
};

await remove();
