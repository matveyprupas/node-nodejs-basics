const parseArgs = () => {
    const envArgs = process.argv.filter(
        ([key]) => !key.startsWith('/')
    ).join(' is ').split(' is --').join(', ').split('--').join('');
    
    console.log( envArgs, );
};

parseArgs();