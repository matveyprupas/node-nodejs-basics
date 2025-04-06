import crypto from 'crypto';
import path from 'path';
import fs from 'fs/promises';

const calculateHash = async () => {
    const filePath = path.resolve('hash/files/fileToCalculateHashFor.txt');
    const fileInfo = await fs.readFile(filePath)

    const hash = crypto.createHash('sha256').update(fileInfo).digest('hex');

    console.log(hash);
};

await calculateHash();