import {
  messages,
  rl,
} from './utilits/constants.mjs';
export const closeApp = (userName) => {
  rl.on('line', (userCommand) => {
    if (userCommand === '.exit') {
      rl.question('Exit (y or n)? ', (input) => {
        if (input.match(/^y(es)?$/i)) {
          console.log(
            `${messages.goodbye}, ${userName}!`
          );
          rl.pause();
        }
      });
    }
  });
  rl.on('SIGINT', () => {
    rl.question('Exit (y or n)? ', (input) => {
      if (input.match(/^y(es)?$/i)) {
        console.log(
          `${messages.goodbye}, ${userName}!`
        );
        rl.pause();
      }
    });
  });
};
