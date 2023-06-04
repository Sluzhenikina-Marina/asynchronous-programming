import fs from 'fs';

// BEGIN
const write = (path, data, callback) => {
    fs.writeFileSync(path, data);
    callback();
}

export default write;
// END