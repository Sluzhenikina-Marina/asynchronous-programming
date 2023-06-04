import fsp from 'fs/promises';

// BEGIN
export const touch = async (fileSource) => {
    try {
      await fsp.access(fileSource);
    } catch (error) {
      await fsp.writeFile(fileSource, '');
    }
  };
// END