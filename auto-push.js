// script.js
const { exec } = require('child_process');

exec('nodemon -e js,css,html', (err, stdout, stderr) => {
  if (err) {
    // Node couldn't execute the command
    console.error(`exec error: ${err}`);
    return;
  }

  // Execute git add and commit
  exec('git add . && git commit -m "update"', (err, stdout, stderr) => {
    if (err) {
      // Git commands failed
      console.error(`exec error: ${err}`);
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
