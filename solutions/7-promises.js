import fsp from 'fs/promises';

// BEGIN
export const reverse = async (fileSource) => {

    const file = await fsp.readFile(fileSource, 'utf-8');

    const strings = file.trim().split('\n')
    const reversedStrings = strings.reverse().join('\n');
    await fsp.writeFile(fileSource, reversedStrings);

}
// END