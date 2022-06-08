import { showInfoDir } from './infoDir.mjs';
import { closeApp } from './exit.mjs';
import {
  messages,
  rl,
} from './utilits/constants.mjs';
import { showHomeDir } from './os/index.js';

export let userName;
export let currentDir;

export const args = process.argv;
args.forEach((arg) => {
  currentDir = args[1];
  if (arg.startsWith('--username')) {
    let previousUserName = arg.slice(11);
    userName =
      previousUserName[0].toUpperCase() +
      previousUserName.slice(1);
    console.log(
      `${messages.greeting}, ${userName}!
    `
    );
    showHomeDir();
  }
});
closeApp(userName);
