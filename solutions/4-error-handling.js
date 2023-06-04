import fs from 'fs';

// BEGIN

export const move = (sourcePath, destinationPath, callback) => {
    fs.readFile(sourcePath, (readError, data) => {
      if (readError) {
        callback(readError);
        return;
      }
  
      fs.writeFile(destinationPath, data, (writeError) => {
        if (writeError) {
          callback(writeError);
          return;
        }
  
        fs.unlink(sourcePath, (unlinkError) => {
          if (unlinkError) {
            callback(unlinkError);
            return;
          }
  
          callback(null);
        });
      });
    });
  };


// END