import fs from 'fs/promises';
import path from 'path';


const copy = async () => {
    const srcPath = path.resolve('fs/files');
    const destPath = path.resolve('fs/files_copy');

    try {
        await fs.cp(srcPath, destPath, {recursive: true, force: false, errorOnExist: true});
    } catch (err) {
        throw new Error('FS operation failed');
    }
    
    
};

await copy();
