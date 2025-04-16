import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const spawnedProcess = spawn('node', ['cp/files/script.js', ...args]);

    spawnedProcess.stdout.on('data', (data) => {
        console.log(`Child process stdout: ${data}`);
    });
    spawnedProcess.stderr.on('data', (data) => {
        console.error(`Child process stderr: ${data}`);
    });
    spawnedProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
    spawnedProcess.on('error', (error) => {
        console.error(`Error spawning child process: ${error}`);
    });

    process.stdin.pipe(spawnedProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
