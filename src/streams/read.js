import path from 'path';
import fs from 'fs';

const read = async () => {
    const srcPath = path.resolve('streams/files/fileToRead.txt');
    
    const readable = fs.createReadStream(srcPath, {encoding: 'utf-8'});

    readable.on('data', (chunk) => {
        process.stdout.write(`${chunk}\n`);
    })
};

await read();