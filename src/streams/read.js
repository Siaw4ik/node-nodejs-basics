import fs from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises'

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const filePath = join(__dirname, 'files', 'fileToRead.txt')
  const fileStream = fs.createReadStream(filePath);

  await pipeline(fileStream, process.stdout)
};

await read();