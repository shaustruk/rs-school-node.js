import { messages } from '../utilits/constants.mjs';

export const showCurrentDir = () => {
  console.log(
    `\x1b[36m ${
      messages.infoCurrentDir
    }: ${process.cwd()}`
  );
};
