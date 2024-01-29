import { argv } from "node:process";
import { log } from "node:console";

const parseArgs = () => {
  const args = argv.slice(2);

  const result = args
    .filter((_, index) => index % 2 === 0)
    .map(
      (arg, index) =>
        `${arg.startsWith("--") ? arg.slice(2) : arg} is ${args[index * 2 + 1]}`
    )
    .join(", ");

  log(result);
};

parseArgs();
