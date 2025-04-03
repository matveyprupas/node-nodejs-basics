import fs from 'fs/promises';
import path from 'path';

const list = async () => {
    const dirPath = path.resolve('fs/files');

    try {
        const dirList = await fs.readdir(dirPath, {withFileTypes: true, recursive: true });

        console.log(dirList.map((item) => item.name));
    } catch (err) {
        throw new Error('FS operation failed');
    }};

await list();