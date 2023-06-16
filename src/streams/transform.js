import { Transform } from 'node:stream';
import { pipeline } from 'stream/promises'

const transform = async () => {
    const reverseStream = (chunk) => chunk.split('').reverse().join('');
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverseStream(chunk.toString()) + '\n')
        }
    })

    await pipeline(process.stdin, transformStream, process.stdout)
};

await transform();