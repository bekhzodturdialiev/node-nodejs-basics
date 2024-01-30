import { createWriteStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stdin } from 'node:process'
import { log } from 'node:console'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const file = join(__dirname, "files/fileToWrite.txt");
  const stream = createWriteStream(file, { encoding: 'utf-8' });

  stdin.pipe(stream)

  log('You can type now. Press [ctrl]+D to quit and save your text')
  
  stdin.on('end', () => {
    log('\nDone');
  });
};

await write();