import { pipeline } from 'stream';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
    const readPath = path.resolve('zip/files/archive.gz');
    const writePath = path.resolve('zip/files/fileToCompress.txt');
    
    const readableStream = fs.createReadStream(readPath);
    const writeableStream = fs.createWriteStream(writePath);
    const unzip = zlib.createGunzip();

    pipeline(readableStream, unzip, writeableStream, (err) => {
        console.log(err);
    });
};

await decompress();