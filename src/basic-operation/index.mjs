import { activity } from '../main/activity.mjs';
import { messages } from '../utilits/constants.mjs';
import {
  access,
  fs,
  path,
  rn,
  unlink,
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
    let writeStream =
      fs.createWriteStream(destFile);
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

export const renameFile = async (
  pathFile,
  newfileName
) => {
  try {
    const currentPathFile = path.join(
      process.cwd(),
      pathFile
    );
    const arrPath = pathFile.split('/');
    const prevPath = arrPath
      .slice(0, -1)
      .join('/');
    const newPathFile = path.join(
      prevPath,
      newfileName
    );
    await rn(currentPathFile, newPathFile);
  } catch (err) {
    console.log(messages.failed);
  }
  activity();
};

export const copyFile = (
  pathCurrentFile,
  pathDestinFile
) => {};

export const moveFile = (
  pathCurrentFile,
  pathDestinDirect
) => {};

export const deleteFile = async (
  pathDestinFile
) => {
  try {
    await unlink(
      path.join(process.cwd(), pathDestinFile)
    );
    console.log(messages.deleteInfo);
  } catch (error) {
    console.error(messages.errorPath);
  }
  activity();
};
