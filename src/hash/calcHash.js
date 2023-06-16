import { createHash } from 'node:crypto'
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const calculateHash = async () => {
  const moduleURL = import.meta.url;
  const __filename = fileURLToPath(moduleURL);
  const __dirname = dirname(__filename);
  
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
  const content = await fs.readFile(filePath)

  const hash = await createHash('sha256').update(content).digest('hex')

  console.log(hash)

};

await calculateHash();