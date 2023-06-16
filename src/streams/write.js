import fs from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises'

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const filePath = join(__dirname, 'files', 'fileToWrite.txt')
  const fileStream = fs.createWriteStream(filePath, {flags: 'a'});

  await pipeline(process.stdin, fileStream)
};

await write();