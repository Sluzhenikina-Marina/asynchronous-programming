import fsp from 'fs/promises';

// BEGIN
export const exchange = async (firstFileSource, secondFileSource) => {
    const firstFile = await fsp.readFile(firstFileSource, 'utf-8');
    const secondFile = await fsp.readFile(secondFileSource, 'utf-8');
    await fsp.writeFile(firstFileSource, secondFile);
    await fsp.writeFile(secondFileSource, firstFile);
}
// END