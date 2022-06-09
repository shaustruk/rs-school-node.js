//!!absolut path=>    C:\Users\katerina\Desktop
import {
  changeDir,
  showCurrentDir,
} from '../fs/index.js';
import {
  goUpperDir,
  listIntroDir,
} from '../navigate/index.js';
import {
  showArchCpu,
  showCPUInfo,
  showEOL,
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
    (line) => {
      const [command, ...args] = line.split(' ');
      switch (command) {
        case 'up':
        case '..':
          goUpperDir();
          activity();
          break;
        case 'ls':
          listIntroDir();
          activity();
          break;
        case 'os':
          switch (args[0]) {
            case '--homedir':
              showHomeDir();
              activity();
              break;
            case '--username':
              showUserNameOS();
              activity();
              break;
            case '--cpus':
              showCPUInfo();
              activity();
              break;
            case '--EOL':
              showEOL();
              activity();
              break;
            case '--arch':
              showArchCpu();
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
        case 'cd':
          changeDir(args[0]);
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
