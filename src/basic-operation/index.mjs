import { messages } from '../utilits/constants.mjs';
import { fs, path } from '../utilits/index.mjs';

function handler() {
  console.log(messages.errorPath);
}

export const createFile = (fileName) => {};

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
      console.error('FS operation failed');
    }
  }
};

export const renameFile = (
  pathFile,
  newfileName
) => {};

export const copyFile = (
  pathCurrentFile,
  pathDestinFile
) => {};

export const moveFile = (
  pathCurrentFile,
  pathDestinDirect
) => {};

export const deleteFile = (pathDestinFile) => {};
