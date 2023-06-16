import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
    
  const filePath = join(__dirname, 'files', 'script.js')

  const childProcess = fork(filePath, args, {silent: true});

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout)

};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
