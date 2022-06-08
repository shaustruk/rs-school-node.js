import {
  messages,
  rl,
} from '../utilits/constants.mjs';

export const showIsvalidEnter = (isEntrance) => {
  isEntrance === true
    ? showHomeDir()
    : console.log(
        `\x1b[31m ${messages.invalidEnter}`
      );
  rl.pause();
};
