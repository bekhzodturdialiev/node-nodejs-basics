import { Transform } from "stream";
import { stdin, stdout } from 'node:process'
import { log } from 'node:console'

const transform = () => {
  const stream = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      this.push(reversedChunk);
      callback();
    },
  });

  log('You can type now, your text will be logged out transformed')

  stdin.pipe(stream).pipe(stdout);
};

await transform();
