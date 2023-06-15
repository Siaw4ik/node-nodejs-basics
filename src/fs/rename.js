import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const rename = async () => {
  try{
    const moduleURL = import.meta.url;
    const __filename = fileURLToPath(moduleURL);
    const __dirname = dirname(__filename);

    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md')

    const isOldFile = await fs.access(oldPath)
      .then(() => true)
      .catch(() => false)

    const isNewFile = await fs.access(newPath)
      .then(() => true)
      .catch(() => false)

    if(!isOldFile || isNewFile){
      throw new Error('FS operation failed')
    }

    await fs.rename(oldPath, newPath);
  }
  catch(error){
    console.log(error.message);
  }
};

await rename();