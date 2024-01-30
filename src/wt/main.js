import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const cores = cpus().length;
  const promises = [];

  for (let i = 0; i < cores; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, "worker.js"), {
        workerData: i + 10,
      });
      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data,
        });
      });
      worker.on("error", () => {
        reject({
          status: "error",
          data: null,
        });
      });
    });
    promises.push(promise);
  }
  
  const results = await Promise.allSettled(promises).then((response) => {
    return response.map((result) =>
      result.status === "fulfilled" ? result.value : result.reason
    );
  });
  log(results);
};

await performCalculations();
