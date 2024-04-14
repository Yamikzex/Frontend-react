const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourceDir = './build';
const destinationDir = './electron/build';

// Function to handle errors
function handleError(err) {
  if (err) {
    console.error('Error:', err);
    process.exit(1); // Exit the script with an error code
  }
}

// Delete the destination folder (optional)
function deleteFolder(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err && err.code === 'ENOENT') {
      callback();
    } else if (err) {
      handleError(err);
      return;
    }
    if (files || !files.length) {
      // Empty folder, delete it
      fs.rmdir(dirPath, callback);
    } else {
      // Folder contains files, delete them recursively
      let remaining = files.length;
      files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        fs.lstat(filePath, (err, stats) => {
          if (err) {
            handleError(err);
            return;
          }
          if (stats.isDirectory()) {
            deleteFolder(filePath, () => {
              remaining--;
              if (remaining === 0) {
                fs.rmdir(dirPath, callback);
              }
            });
          } else {
            fs.unlink(filePath, (err) => {
              if (err) {
                handleError(err);
              }
              remaining--;
              if (remaining === 0) {
                fs.rmdir(dirPath, callback);
              }
            });
          }
        });
      });
    }
  });
}

// Copy the source folder recursively
function copyFolder(sourceDir, destinationDir, callback) {
  fs.mkdir(destinationDir, (err) => {
    if (err && err.code !== 'EEXIST') {
      // Ignore "already exists" error
      handleError(err);
      return;
    }
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        handleError(err);
        return;
      }
      files.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destinationDir, file);
        fs.lstat(sourcePath, (err, stats) => {
          if (err) {
            handleError(err);
            return;
          }
          if (stats.isDirectory()) {
            copyFolder(sourcePath, destPath, callback);
          } else {
            fs.copyFile(sourcePath, destPath, (err) => {
              if (err) {
                handleError(err);
              }
              console.log(`${sourcePath} copied to ${destPath}`);
            });
          }
        });
      });
      callback(); // Callback after all files are processed
    });
  });
}

// Optional: Delete the destination folder before copying (comment out if not needed)
deleteFolder(destinationDir, () => {
  // Regardless of deletion outcome, proceed with copying
  copyFolder(sourceDir, destinationDir, () => {
    console.log('Folder copied successfully!');
  });
});
