import { showCurrentDir } from '../fs/index.js';
import {
  goUpperDir,
  listIntroDir,
} from '../navigate/index.js';
import {
  showHomeDir,
  showUserNameOS,
} from '../os/index.js';

import {
  messages,
  rl,
} from '../utilits/constants.mjs';

export const activity = () => {
  showCurrentDir();
  rl.question(
    `\x1b[36m ${messages.enterCommand + '\n'}`,
    (userCommand) => {
      // if (userCommand.startsWith('cd ')) {
      //   changeDir(userCommand.trim().slice(3));
      //   activity();
      // } else {
      switch (userCommand.trim()) {
        case 'up':
        case '..':
          goUpperDir();
          activity();
          break;
        case 'ls':
          listIntroDir();
          break;
        case 'os --homedir':
          showHomeDir();
          activity();
          break;
        case 'os --username':
          showUserNameOS();
          activity();
          break;
        default:
          console.log(
            '\x1b[31m',
            messages.invalidCommand
          );
          activity();
          break;
      }
    }
    // }
  );
};
