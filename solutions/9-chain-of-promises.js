import fsp from 'fs/promises';

// BEGIN
export const getTypes = (fileSources) => {
    const promise = fileSources.map(fileSource => {
        return fsp.stat(fileSource).then((stats) => {
            if (stats.isDirectory()) {
                return 'directory';
            } else {
                return 'file';
            }
        }).catch(() => null);
    })
    return Promise.all(promise);
}
// END