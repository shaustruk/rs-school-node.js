import { activity } from '../main/activity.mjs';
import { messages } from '../utilits/constants.mjs';
import {
  access,
  crypto,
  fs,
  path,
  unlink,
  zlib,
} from '../utilits/index.mjs';

export const calculateHash = async (
  pathFileHash
) => {
  let secret;
  const destPath = path.join(
    process.cwd(),
    pathFileHash
  );
  const stream = fs.createReadStream(destPath);
  const hash = crypto.createHash(
    'sha256',
    destPath
  );
  stream.on('readable', () => {
    let data = stream.read();
    if (data) {
      hash.update(data);
    } else {
      secret = hash.digest('hex');
    }
  });
  stream.on('end', () => {
    console.log(`${messages.infoHash} ${secret}`);
  });
  stream.on('error', (err) => {
    if (err.code == 'ENOENT') {
      console.log(messages.invalidCommand);
    } else {
      console.error(messages.failed);
    }
  });
};

export const compressBrotli = async (
  pathToCurrentFile,
  destinPath
) => {
  if (pathToCurrentFile && destinPath) {
    try {
      fs.access(
        pathToCurrentFile,
        fs.constants.R_OK | fs.constants.W_OK,
        (err) => {
          if (err) {
            console.log(messages.errorPath);
          } else {
            const pathCurrent = path.join(
              process.cwd(),
              pathToCurrentFile
            );
            const baseName =
              path.basename(pathCurrent);
            const newFileName = baseName + '.br';
            const readStream =
              fs.createReadStream(pathCurrent);
            readStream.on('error', (err) => {
              console.log(err, activity());
            });
            const writeStream =
              fs.createWriteStream(
                path.join(
                  process.cwd(),
                  destinPath,
                  newFileName
                )
              );
            writeStream.on('error', (err) => {
              console.log(messages.failed);
            });
            const brotli =
              zlib.createBrotliCompress();
            const stream = readStream
              .pipe(brotli)
              .pipe(writeStream);

            stream.on('finish', () => {
              console.log(messages.compressInfo),
                unlink(pathCurrent);
            });
          }
        }
      );
    } catch (err) {
      console.log(messages.failed);
    }
    activity();
  }
};
export const decompressBrotli = async (
  pathToCurrentFile,
  destinPath
) => {
  if (pathToCurrentFile && destinPath) {
    try {
      fs.access(
        pathToCurrentFile,
        fs.constants.R_OK | fs.constants.W_OK,
        (err) => {
          if (err) {
            console.log(messages.errorPath);
          } else {
            const pathCurrent = path.join(
              process.cwd(),
              pathToCurrentFile
            );
            const newFileName = path.basename(
              pathCurrent,
              '.br'
            );
            const readStream =
              fs.createReadStream(pathCurrent);
            readStream.on('error', (err) => {
              console.log(err, activity());
            });
            const writeStream =
              fs.createWriteStream(
                path.join(
                  process.cwd(),
                  destinPath,
                  newFileName
                )
              );
            writeStream.on('error', (err) => {
              console.log(messages.failed);
            });
            const brotli =
              zlib.createBrotliDecompress();
            const stream = readStream
              .pipe(brotli)
              .pipe(writeStream);

            stream.on('finish', () => {
              console.log(
                messages.decompressInfo
              ),
                unlink(pathCurrent);
            });
          }
        }
      );
    } catch (err) {
      console.log(messages.failed);
    }
  } else messages.failed;
  activity();
};
