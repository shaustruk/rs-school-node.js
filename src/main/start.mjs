import { entrance, userName } from './enter.js';
import { activity } from './activity.mjs';
import { messages } from '../utilits/constants.mjs';
import { os } from '../utilits/index.mjs';
import { showCurrentDir } from '../fs/index.mjs';

export const args = process.argv;

try {
  process.chdir(os.homedir());
  entrance(args);
  activity();
  process.on('SIGINT', () => process.exit());
  process.on('exit', () =>
    console.log(
      `\x1b[36m ${messages.goodbye}, ${userName}!`
    )
  );
} catch (err) {
  console.error(err);
}
