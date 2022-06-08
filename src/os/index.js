import {
  homeDir,
  messages,
} from '../utilits/constants.mjs';

export const showHomeDir = () => {
  return console.log(
    `${messages.infoHomeDir}: ${homeDir}`
  );
};
