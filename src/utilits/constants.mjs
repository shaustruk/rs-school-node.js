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

export const systemCpuCores = os.cpus();

export const EOL = os.EOL;

export const cpuArch = process.arch;

export const messages = {
  greeting: 'Welcome to the File Manager',
  goodbye: 'Thank you for using File Manager',
  infoRootDir:
    "It's the root folder! You have to stop",
  infoCurrentDir: 'You are currently in: ',
  infoHomeDir: 'Your home dir is: ',
  invalidEnter:
    'Invalid input! Please enter true command "npm start -- --username=YOUR_NAME"',
  enterCommand: 'Please, enter command:',
  invalidCommand:
    'Invalid input. This command doesn"t exist',
  failed: 'Operation failed',
  fallsDirName: 'This folder does not exist...',
  listFilesCurrentDir:
    'The list filenames & dir:',
  userNameOS: 'The main user is:',
  cpuInfo: 'The host machine CPUs:',
  eolInfo:
    'Default system End-Of-Line for your os it is: ',
  cpuArchInfo:
    'CPU architecture for which the Node.js binary was compiled',
  errorPath:
    'Invalid input. This path is not correct',
  changeDir: 'The current dir was changed',
  infoHash: 'The hash is created:',
  deleteInfo: 'The file was deleted!',
  compressInfo: 'The file was compressed',
};
