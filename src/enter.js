import { showIsvalidEnter } from './of/index.mjs';
import { showHomeDir } from './os/index.js';
import { messages } from './utilits/constants.mjs';

export let userName;
export let isEntrance;

export const entrance = (args) => {
  if (args[2].startsWith('--username')) {
    isEntrance = true;
    let previousUserName = args[2].slice(11);
    userName =
      previousUserName[0].toUpperCase() +
      previousUserName.slice(1);
    console.log(
      `\x1b[36m ${messages.greeting}, ${userName}!
      `
    );
    showHomeDir();
  } else showIsvalidEnter();
};
