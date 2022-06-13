import { activity } from '../main/activity.mjs';
import {
  messages,
  __dirname,
} from '../utilits/constants.mjs';
import { fs } from '../utilits/index.mjs';

export const goUpperDir = () => {
  if (process.cwd() === 'C:\\') {
    console.info(
      `\x1b[31m ${messages.infoRootDir}`
    );
  } else process.chdir('..');
};

export let listIntroDir = () => {
  return fs.readdir(
    process.cwd(),
    (err, files) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `\n \x1b[36m ${messages.listFilesCurrentDir}`
        );
        files.forEach((file) => {
          console.log('\x1b[32m', file);
        });
      }
      activity();
    }
  );
};
