import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const file = join(__dirname, "files/fileToCalculateHashFor.txt");
  const content = await readFile(file);
  const hash = createHash("sha256").update(content).digest("hex");

  log("Hex: ", hash);
};

await calculateHash();
