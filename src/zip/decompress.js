import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { log, error } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const inputFile = join(__dirname, "files/archive.gz");
  const outputFile = join(__dirname, "files/fileToCompress.txt");

  const readStream = createReadStream(inputFile);
  const writeStream = createWriteStream(outputFile);
  const gunzip = createGunzip();

  try {
    await new Promise((resolve, reject) => {
      readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on("finish", resolve)
        .on("error", reject);
    });
    log(`File decompressed successfully: ${outputFile}`);
  } catch (e) {
    error(`Error decompressing file: ${e.message}`);
  }
};

await decompress();
