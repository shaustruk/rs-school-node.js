import * as process from 'process';
import * as readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName;

const args = process.argv.slice(2);
args.forEach((arg) => {
  if (arg.startsWith('--username')) {
    let previousUserName = arg.slice(11);
    userName =
      previousUserName[0].toUpperCase() +
      previousUserName.slice(1);
    console.log(
      `Welcome to the File Manager, ${userName}!
    `
    );
  }
  rl.on('line', (exit) => {
    if (exit === '.exit') {
      rl.question('Exit (y or n)? ', (input) => {
        if (input.match(/^y(es)?$/i)) {
          console.log(
            `Thank you for using File Manager, ${userName}!`
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
          `Thank you for using File Manager, ${userName}`
        );
        rl.pause();
      }
    });
  });
});
