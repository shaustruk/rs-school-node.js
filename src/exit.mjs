import {
  messages,
  rl,
} from './utilits/constants.mjs';
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
