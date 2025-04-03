import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldPath = path.resolve('fs/files/wrongFilename.txt');
    const newPath = path.resolve('fs/files/properFilename.md');
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(newPath);
        throw new Error(errorMessage);
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                await fs.rename(oldPath, newPath);
            } catch (err) {
                throw new Error(errorMessage);
            }
        } else {
            throw error;
        }
    }      
};

await rename();