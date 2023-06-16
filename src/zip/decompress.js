import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises'
import { createGunzip } from 'node:zlib';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const srcPath = join(__dirname, 'files', 'archive.gz')
  const destPath = join(__dirname, 'files', 'fileToCompress.txt')

  await pipeline(
    createReadStream(srcPath),
    createGunzip(),
    createWriteStream(destPath),
  );
};

await decompress();