import { showCurrentDir } from '../fs/index.js';
import {
  messages,
  rl,
} from '../utilits/constants.mjs';

export const showIsvalidEnter = (isEntrance) => {
  isEntrance === true
    ? showCurrentDir()
    : console.log(
        `\x1b[31m ${messages.invalidEnter}`
      );
  rl.pause();
};
