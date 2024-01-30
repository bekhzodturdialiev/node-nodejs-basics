import { fork } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const modulePath = join(__dirname, "files/script.js");
  fork(modulePath, args);
};

spawnChildProcess(["arg1", "arg2", "arg3", "arg4"]);
