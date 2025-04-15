import os from 'os';
import { Worker } from 'worker_threads';

const BASE_N = 10;

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const createWorker = (cpus, thread_index) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./wt/worker.js', {
            workerData: {
                n: BASE_N + thread_index,
                thread_index: thread_index,
                thread_count: cpus,
            },
        });

        worker.on('message', (message) => {
            resolve({status: 'resolved', data: message});
        });

        worker.on('error', () => {
            reject({status: 'error', data: null});
        });

    });
};

const performCalculations = async () => {
    const CPU_CORES = os.availableParallelism();

    // const oneThreadResults = new Array(CPU_CORES).fill(null).map((_, index) => ({status: 'resolved', data: nthFibonacci(BASE_N + index)}));
    // console.log(oneThreadResults);
    
    const workersPromises = new Array(CPU_CORES).fill(null).map((_, index) => createWorker(CPU_CORES, index));
    const results = await Promise.all(workersPromises);
    console.log(results);

};

const start = Date.now();

await performCalculations();

const finish = Date.now();

// console.log(`Execution time: ${(finish - start) / 1000} s`);