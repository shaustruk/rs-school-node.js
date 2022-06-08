import {
  homeDir,
  messages,
} from '../utilits/constants.mjs';

export const showHomeDir = () => {
  return console.log(
    `\x1b[32m ${messages.infoHomeDir}: ${homeDir}`
  );
};
