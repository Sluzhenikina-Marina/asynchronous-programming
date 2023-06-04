import fs from 'fs';

// BEGIN
export const watch = (sourcePath, interval, callback) => {
    let lastCheckTime = Date.now();
    let intervalId = null;
  
    const checkAndUpdate = () => {
      fs.stat(sourcePath, (error, stats) => {
        if (error) {
          clearInterval(intervalId);
          callback(error);
          return;
        }
  
        if (stats.mtimeMs > lastCheckTime) {
          lastCheckTime = stats.mtimeMs;
          callback(null);
        }
      });
    };
  
    const startWatch = () => {
      checkAndUpdate();
      intervalId = setInterval(checkAndUpdate, interval);
    };
  
    startWatch();
  
    return intervalId;
};



export default watch;
// END
