import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { log, error } from "node:console";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const inputFile = join(__dirname, "files/fileToCompress.txt");
  const outputFile = join(__dirname, "files/archive.gz");

  const readStream = createReadStream(inputFile);
  const writeStream = createWriteStream(outputFile);
  const gzip = createGzip();

  try {
    await new Promise((resolve, reject) => {
      readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on("finish", resolve)
        .on("error", reject);
    });
    log(`File compressed successfully: ${outputFile}`);
  } catch (e) {
    error(`Error compressing file: ${e.message}`);
  }
};

await compress();
