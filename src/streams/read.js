import { createReadStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { EOL } from 'node:os'
import { stdout } from 'node:process'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const file = join(__dirname, "files/fileToRead.txt");
  const fileStream = createReadStream(file, { encoding: 'utf-8' });

  fileStream.on("data", (chunk) => stdout.write(chunk + EOL));
};

await read();