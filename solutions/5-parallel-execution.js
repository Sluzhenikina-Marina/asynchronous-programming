import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (filePath, callback) => {
    fs.readdir(filePath, (error, files) => {
        if (error) {
            callback(error);
            return;
        }

        const paths = files.map(file => path.join(filePath, file));
        async.map(paths, fs.stat, (error, stats) => {
        if (error) {
            callback(error);
            return;
        }

        const sizes = stats.filter(stat => stat.isFile()).map(stat => stat.size);
        const directorySize = _.sumBy(sizes, _.identity);
        callback(null, directorySize);
        });
    })

}
// END
