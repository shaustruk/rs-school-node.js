import {
  messages,
  rl,
} from '../utilits/constants.mjs';
import { activity } from './activity.mjs';

export const enterExitCommand = (userName) => {
  return rl.question(
    '\x1b[31m Exit (y or n)? ',
    (input) => {
      if (input.match(/^y(es)?$/i)) {
        console.log(
          `\x1b[36m ${messages.goodbye}, ${userName}!`
        );
        rl.pause();
      } else activity();
    }
  );
};
export const closeApp = (userName) => {
  rl.on('line', (userCommand) => {
    if (userCommand === '.exit') {
      rl.question(
        '\x1b[31m Exit (y or n)? ',
        (input) => {
          if (input.match(/^y(es)?$/i)) {
            console.log(
              `\x1b[36m ${messages.goodbye}, ${userName}!`
            );
            rl.pause();
          }
        }
      );
    }
  });
  rl.on('SIGINT', () => {
    rl.question(
      '\x1b[31m Exit (y or n)? ',
      (input) => {
        if (input.match(/^y(es)?$/i)) {
          console.log(
            `\x1b[36m ${messages.goodbye}, ${userName}!`
          );
          rl.pause();
        }
      }
    );
  });
};
