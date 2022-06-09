import { messages } from '../utilits/constants.mjs';

export let userName;

export let isEntrance;

const showIsvalidEnter = (isEntrance) => {
  isEntrance === true
    ? activity()
    : console.log(
        `\x1b[31m ${messages.invalidEnter}`
      );
  rl.pause();
};

export const entrance = (args) => {
  if (args[2].startsWith('--username=')) {
    isEntrance = true;
    let previousUserName = args[2].slice(11);
    if (previousUserName) {
      userName =
        previousUserName[0].toUpperCase() +
        previousUserName.slice(1);
      console.log(
        `\x1b[36m ${messages.greeting}, ${userName}!
      `
      );
    } else
      console.log(
        `\x1b[36m ${messages.greeting},\x1b[31m unknown!
      `
      );
  } else showIsvalidEnter();
};
