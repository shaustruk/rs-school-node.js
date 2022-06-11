//!!absolut path=>    C:\Users\katerina\Desktop
import {
  copyFile,
  createFile,
  deleteFile,
  moveFile,
  readFile,
  renameFile,
} from '../basic-operation/index.mjs';
import { changeDir } from '../fs/index.mjs';
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
import { calculateHash } from '../transform/index.mjs';

import {
  messages,
  rl,
} from '../utilits/constants.mjs';

export const activity = () => {
  rl.question(
    `\x1b[36m ${
      messages.infoCurrentDir +
      process.cwd() +
      '\n'
    }`,
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
        case 'cd':
          changeDir(args[0]);
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
          break;
        case 'hash':
          calculateHash(args[0]);
          activity();
          break;
        case 'cat':
          readFile(args[0]);
          activity();
          break;
        case 'add':
          createFile(args[0]);
          activity();
          break;
        case 'rn':
          renameFile(args[0], args[1]);
          // activity();
          break;
        case 'cp':
          copyFile(args[0], args[1]);
          activity();
          break;
        case 'mv':
          moveFile(args[0], args[1]);
          activity();
          break;
        case 'rm':
          deleteFile(args[0], args[1]);
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
