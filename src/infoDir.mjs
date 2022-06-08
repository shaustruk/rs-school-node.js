import {
  messages,
  __dirname,
} from './utilits/constants.mjs';

export const showInfoDir = () => {
  return console.log(
    `${messages.infoCurrentDir}: ${__dirname}`
  );
};
