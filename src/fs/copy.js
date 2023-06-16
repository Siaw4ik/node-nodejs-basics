import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const copy = async () => {
  const moduleURL = import.meta.url;
  const __filename = fileURLToPath(moduleURL);
  const __dirname = dirname(__filename);

    const srcPath = join(__dirname, 'files');
    const destPath = join(__dirname, 'files_copy');

    try{
      const srsExists = await fs.access(srcPath)
        .then(() => true)
        .catch(() => false)

      const destExists = await fs.access(destPath)
        .then(() => true)
        .catch(() => false)

      if(!srsExists){
        throw new Error('FS operation failed')
      }
      if(destExists){
        throw new Error('FS operation failed')
      }

      await fs.cp(srcPath, destPath, { recursive: true })

    }
    catch(error) {
        console.log(error.message)
    }
};

await copy();
