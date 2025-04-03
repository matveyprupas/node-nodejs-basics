import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
    const filePath = path.resolve('fs/files/fileToRemove.txt');

    try {
        await fs.rm(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();