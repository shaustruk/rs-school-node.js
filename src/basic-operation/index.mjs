import { messages } from '../utilits/constants.mjs';
import {
  fs,
  path,
  rn,
} from '../utilits/index.mjs';

function handler() {
  console.log(messages.errorPath);
}

export const createFile = (fileName) => {
  try {
    const destFile = path.join(
      process.cwd(),
      fileName
    );
    let writeStream = fs.createWriteStream(
      destFile,
      { flag: 'wx+' }
    );
    writeStream.on('close', () => {
      process.stdout.write('\n');
    });
    writeStream.on('error', () => {
      handler();
    });
  } catch (err) {
    if (err) {
      console.error(`${messages.failed}`);
    }
  }
};

export const readFile = async (pathfile) => {
  try {
    const destFile = path.join(
      process.cwd(),
      pathfile
    );
    let readableStream = fs.createReadStream(
      destFile,
      'utf8'
    );
    readableStream.pipe(process.stdout);
    readableStream.on('close', () => {
      process.stdout.write('\n');
    });
    readableStream.on('error', () => {
      handler();
    });
  } catch (err) {
    if (err) {
      console.error(`${messages.failed}`);
    }
  }
};

export const renameFile = (
  pathFile,
  newfileName
) => {
  try {
    const currentPathFile = path.join(
      process.cwd(),
      pathFile
    );
    const newPathFile = path.join(
      process.cwd(),
      newfileName
    );
    access(
      currentPathFile,
      constants.R_OK | constants.W_OK,
      (err) => {
        if (err) {
          rn(currentPathFile, newPathFile);
        } else {
          console.error(messages.failed, '1');
        }
      }
    );
  } catch (err) {
    rn(currentPathFile, newPathFile);
    console.error(messages.failed, '2');
  }
};

export const copyFile = (
  pathCurrentFile,
  pathDestinFile
) => {};

export const moveFile = (
  pathCurrentFile,
  pathDestinDirect
) => {};

export const deleteFile = (pathDestinFile) => {};
