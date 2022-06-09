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

export const rootDir = path.parse(__dirname);

export const osUserName = os.userInfo().username;

export const messages = {
  greeting: 'Welcome to the File Manager',
  goodbye: 'Thank you for using File Manager',
  infoRootDir:
    "It's the root folder! You have to stop",
  infoCurrentDir: 'You are currently in',
  infoHomeDir: 'Your home dir is: ',
  invalidEnter:
    'Invalid input! Please enter true command "npm start -- --username=YOUR_NAME"',
  enterCommand: 'Please, enter command:',
  invalidCommand:
    'Invalid.input. This team doesn"t exist',
  fallsDirName: 'This folder does not exist...',
  listFilesCurrentDir:
    'The list filenames & dir:',
  userNameOS: 'The main user is:',
};

export let listFolders = [
  'src',
  'fs',
  'main',
  'navigate',
  'of',
  'os',
  'utilits',
  'src',
  'rs-school-node.js-File-Manager',
  'Desktop',
  'katerina',
  'Users',
];
