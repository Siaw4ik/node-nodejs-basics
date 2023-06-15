import fs from 'node:fs/promises'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const create = async () => {
  const moduleURL = import.meta.url;
  const __filename = fileURLToPath(moduleURL);
  const __dirname = dirname(__filename);

  const content = 'I am fresh and young';
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try{
    const fileExists = await fs.access(filePath)
      .then(() => true)
      .catch(() => false)

    if(fileExists){
      throw new Error('FS operation failed');
    } 

    await fs.writeFile(filePath, content);
  }
  catch(error){
    console.log(error.message)
  }
};

await create();