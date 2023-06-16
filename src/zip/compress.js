import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises'
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const srcPath = join(__dirname, 'files', 'fileToCompress.txt')
  const destPath = join(__dirname, 'files', 'archive.gz')

  await pipeline(
    createReadStream(srcPath),
    createGzip(),
    createWriteStream(destPath),
  );
};

await compress();