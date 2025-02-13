import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const filePath = path.resolve('fs/files/fresh.txt');

    try {
        await fs.writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
        console.log('file "fresh.txt" successfully created');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();