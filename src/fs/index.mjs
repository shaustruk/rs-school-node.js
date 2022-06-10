//!!absolut path=>    C:\Users\katerina\Desktop

import { messages } from '../utilits/constants.mjs';
import { path } from '../utilits/index.mjs';

export const showCurrentDir = (path) => {
  console.log(
    `\x1b[36m ${messages.infoCurrentDir}: ${path}`
  );
};

export const changeDir = (way) => {
  if (path.isAbsolute(way)) {
    try {
      process.chdir(way);
      console.log(messages.changeDir);
    } catch (err) {
      console.log(messages.errorPath);
    }
  } else {
    try {
      let userPath = path.join(
        process.cwd(),
        way
      );
      process.chdir(userPath);
      console.log(messages.changeDir);
    } catch (err) {
      console.log(messages.errorPath);
    }
  }
};
