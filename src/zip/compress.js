import { pipeline } from 'stream';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
    const readPath = path.resolve('zip/files/fileToCompress.txt');
    const writePath = path.resolve('zip/files/archive.gz');
    
    const readableStream = fs.createReadStream(readPath);
    const writeableStream = fs.createWriteStream(writePath);
    const gzip = zlib.createGzip();

    pipeline(readableStream, gzip, writeableStream, (err) => {
        console.log(err);
    });
};

await compress();