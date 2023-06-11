const chokidar = require("chokidar");
const { exec } = require("child_process");

// Initialize watcher.
const watcher = chokidar.watch(".", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
});

// Something to use when events are received.
const log = console.log.bind(console);

// Add event listeners.
watcher.on("change", (path) => {
  log(`File ${path} has been changed`);

  exec("git diff --shortstat", (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    // stdout will have a format like: " 1 file changed, 1 insertion(+), 1 deletion(-)"
    const changes = stdout.split(",").map((str) => parseInt(str));
    const filesChanged = changes[0];
    const insertions = changes[1];
    const deletions = changes[2];

    console.log("filesChanged", filesChanged);
    console.log("insertions", insertions);
    console.log("deletions", deletions);

    // Now you can perform some logic based on the number of changes
    if (filesChanged > 5 || insertions + deletions > 10) {
      console.log("✔️ Significant changes detected");

      exec(
        'git add . && git commit -m "update" && git push',
        (err, stdout, stderr) => {
          if (err) {
            // Git commands failed
            console.error(`exec error: ${err}`);
            return;
          }

          // the *entire* stdout and stderr (buffered)
          log(`stdout: ${stdout}`);
          log(`stderr: ${stderr}`);
        }
      );
    } else {
      console.log("No significant changes detected");
    }
  });
});
