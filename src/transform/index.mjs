import { activity } from '../main/activity.mjs';
import { messages } from '../utilits/constants.mjs';
import {
  crypto,
  fs,
  path,
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
      console.log(
        `${messages.infoHash} ${secret}`
      );
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
