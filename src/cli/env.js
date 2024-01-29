import { env } from "node:process";
import { log } from "node:console";

const parseEnv = () => {
    const result = Object.entries(env)
    .filter(([key]) => /^RSS_/.test(key))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  log(result);
};

parseEnv();
