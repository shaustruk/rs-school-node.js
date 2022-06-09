import {
  homeDir,
  messages,
  osUserName,
} from '../utilits/constants.mjs';

export const showHomeDir = () => {
  console.log(
    `\x1b[36m ${messages.infoHomeDir} ${homeDir}`
  );
};

export const showUserNameOS = () => {
  console.log(
    `\x1b[36m ${messages.userNameOS} ${osUserName}`
  );
};

export const showCPUInfo = () => {
  console.log(
    `\x1b[36m ${messages.userNameOS} ${osUserName}`
  );
};
const systemCpuCores = os.cpus();

console.log(systemCpuCores);
