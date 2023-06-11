const chokidar = require('chokidar');
const { exec } = require('child_process');

// Initialize watcher.
const watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// Something to use when events are received.
const log = console.log.bind(console);

// Add event listeners.
watcher
  .on('change', path => {
    log(`File ${path} has been changed`);
    exec('git add . && git commit -m "update" && git push', (err, stdout, stderr) => {
      if (err) {
        // Git commands failed
        console.error(`exec error: ${err}`);
        return;
      }
  
      // the *entire* stdout and stderr (buffered)
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });
  });
