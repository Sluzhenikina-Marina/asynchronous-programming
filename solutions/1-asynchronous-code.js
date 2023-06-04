import fs from 'fs';

// BEGIN
const print = (path) => {
    console.log(fs.readFileSync(path, 'utf-8'));
}


export default print;
// END