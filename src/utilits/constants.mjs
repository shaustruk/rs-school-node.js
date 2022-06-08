import {
  fileURLToPath,
  os,
  path,
  readline,
} from './index.mjs';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
export const homeDir = os.homedir();

export let __filename = fileURLToPath(
  import.meta.url
);
export let __dirname = path.dirname(__filename);

export const messages = {
  greeting: 'Welcome to the File Manager',
  goodbye: 'Thank you for using File Manager',
  infoCurrentDir: 'You are currently in',
  infoHomeDir: 'You are currently in',
  invalidEnter:
    'Invalid input! Please enter true command "npm start -- --username=YOUR_NAME"',
};
