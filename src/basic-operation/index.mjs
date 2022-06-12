import { activity } from '../main/activity.mjs';
import { messages } from '../utilits/constants.mjs';
import {
  access,
  fs,
  path,
  rn,
  unlink,
} from '../utilits/index.mjs';

let writeStream;

let readableStream;
const handler = () => {
  console.log(messages.errorPath);
};

export const createFile = (fileName) => {
  try {
    const destFile = path.join(
      process.cwd(),
      fileName
    );
    fs.access(destFile, (err) => {
      if (err) {
        writeStream =
          fs.createWriteStream(destFile);
        writeStream.on('close', () => {
          process.stdout.write('\n');
        });
        writeStream.on('error', () => {
          handler();
        });
      } else {
        console.log(messages.failed);
      }
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
    readableStream = fs.createReadStream(
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
  activity();
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

export const copyFile = async (
  pathCurrentFile,
  pathDestinDirect
) => {
  try {
    const fileName = pathCurrentFile
      .split('/')
      .slice(-1)
      .join('');

    access(pathCurrentFile, fs.constants.W_OK)
      .then(() => {
        readableStream = fs.createReadStream(
          pathCurrentFile,
          'utf8'
        );
        readableStream.on('close', () => {
          process.stdout.write('\n');
        });
        readableStream.on('error', () => {
          handler();
        });
        try {
          writeStream = fs.createWriteStream(
            path.join(pathDestinDirect, fileName)
          );
          writeStream.on('error', () => {
            console.error(messages.enterCommand);
          });
          readableStream.pipe(writeStream);
          console.log(messages.copyInfo);
        } catch {
          console.error(messages.failed);
        }
      })
      .catch((err) =>
        console.error(messages.failed)
      );
  } catch (err) {
    console.log(messages.failed);
  }
  activity();
};

export const moveFile = async (
  pathCurrentFile,
  pathDestinDirect
) => {
  try {
    const fileName = pathCurrentFile
      .split('/')
      .slice(-1)
      .join('');

    access(pathCurrentFile, fs.constants.W_OK)
      .then(() => {
        readableStream = fs.createReadStream(
          pathCurrentFile,
          'utf8'
        );
        readableStream.on('close', () => {
          process.stdout.write('\n');
        });
        readableStream.on('error', () => {
          handler();
        });
        try {
          writeStream = fs.createWriteStream(
            path.join(pathDestinDirect, fileName)
          );
          writeStream.on('error', () => {
            console.error(messages.enterCommand);
          });
          readableStream.pipe(writeStream);
          console.error(messages.moveInfo);
          writeStream.on('close', () => {
            unlink(pathCurrentFile);
          });
        } catch {
          console.error(messages.enterCommand);
        }
      })
      .catch((err) =>
        console.error(messages.failed)
      );
  } catch (err) {
    console.log(messages.failed);
  }
  activity();
};

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
