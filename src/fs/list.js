import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, basename, extname } from 'path';

const list = async () => {
  const moduleURL = import.meta.url;
  const __filename = fileURLToPath(moduleURL);
  const __dirname = dirname(__filename);

  try{
    const folderPath = join(__dirname, 'files')

    const isFolder = await fs.access(folderPath)
    .then(() => true)
    .catch(() => false)

    if(!isFolder) {
      throw new Error('FS operation failed');
    }
    
    const filesFolder = await fs.readdir(folderPath);

    if(!filesFolder.length){
      throw new Error('FS operation failed');
    }

    filesFolder.forEach((file) => {
      console.log(basename(file, extname(file)))
    })
  }
  catch(error){
    console.log(error.message);
  }
};

await list();