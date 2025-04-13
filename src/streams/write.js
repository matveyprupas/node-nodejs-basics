import path from 'path';
import fs from 'fs';


const write = async () => {
    const writePath = path.resolve('streams/files/fileToWrite.txt');
    
    const writable = fs.createWriteStream(writePath, {encoding: 'utf-8'});
    process.stdin.pipe(writable);
};

await write();