import {
  cpuArch,
  EOL,
  homeDir,
  messages,
  osUserName,
  systemCpuCores,
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
  console.log(`\x1b[36m ${messages.cpuInfo}`);
  systemCpuCores.forEach((core) => {
    console.info(
      'model:',
      core.model.split('@')[1],
      'clock rate(GHz):',
      core.speed / 1000 + 'GHz'
    );
  });
};

export const showEOL = () => {
  console.log(
    `\x1b[36m ${messages.eolInfo}${JSON.stringify(
      EOL
    )}`
  );
};

export const showArchCpu = () => {
  console.log(
    `\x1b[36m ${messages.cpuArchInfo}: ${cpuArch}`
  );
};
