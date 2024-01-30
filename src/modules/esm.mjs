import { sep, dirname } from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { fileURLToPath } from "node:url";
import { log } from "node:console";
import { createRequire } from 'node:module';
import "./files/c.js";

const random = Math.random();

let unknownObject;
const require = createRequire(import.meta.url);
if (random > 0.5) {
    unknownObject = require("./files/a.json");
} else {
    unknownObject = require("./files/b.json");
}

log(`Release ${release()}`);
log(`Version ${version()}`);
log(`Path segment separator is "${sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

log(`Path to current file is ${__filename}`);
log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

log(unknownObject);

myServer.listen(PORT, () => {
  log(`Server is listening on port ${PORT}`);
  log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
