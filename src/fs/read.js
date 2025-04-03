import fs from 'fs/promises';
import path from 'path';

const read = async () => {
    const filePath = path.resolve('fs/files/fileToRead.txt');

    try {
        const fileContent = await fs.readFile(filePath, {encoding: 'utf-8'});

        console.log(fileContent);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();