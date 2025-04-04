import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.mjs';

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    const json = await import('./files/a.json', { with: { type: 'json'} });
    unknownObject = json.default;
} else {
    const json = await import('./files/b.json', { with: { type: "json" } } );
    unknownObject = json.default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


