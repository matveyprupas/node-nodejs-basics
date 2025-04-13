import { pipeline, Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().split('').filter(el => el !== '\n').reverse().join('');
            callback(null, `${transformedChunk}\n`);
        }
    })

    pipeline(
        process.stdin, 
        transformStream,
        process.stdout, 
        (err) => {
            console.log(err);
        }
    );
}
await transform();