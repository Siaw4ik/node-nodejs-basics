import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
  const moduleURL = import.meta.url;
  const __filename = fileURLToPath(moduleURL);
  const __dirname = dirname(__filename);

  try{
    const filePath = join(__dirname, 'files', 'fileToRead.txt')

    const isFile = await fs.access(filePath)
    .then(() => true)
    .catch(() => false)

    if(!isFile) {
      throw new Error('FS operation failed');
    }
    
    const data = await fs.readFile(filePath, 'utf-8');

    console.log(data);
  }
  catch(error){
    console.log(error.message);
  }
};

await read();