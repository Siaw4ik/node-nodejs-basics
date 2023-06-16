import {cpus} from 'os';
import { Worker, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const workerPath = join(__dirname, 'worker.js')

  const culculateFibonacci = (workerData) => new Promise((resolve) => {
    const worker = new Worker(workerPath, {workerData})

    worker.on('message', (data) => resolve({status: 'resolved', data}));
    worker.on('error', () => resolve({status: 'error', data: null}));
  })

  const calculation = new Array(cpus().length).fill(null).map((value, index) => culculateFibonacci(index + 10))
  const data = await Promise.all(calculation);

  console.log(data);



};

await performCalculations();