var chokidar = require('chokidar');
var spawn = require('child_process').spawn;
var fs = require('graceful-fs');

var watcher = chokidar.watch('src', {
  ignored: [
    'node_modules',
    '.git',
    'dist',
    '.ng_build',
    '*.sh'
  ],
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);

var command = 'packagr';
var running = false;
var shouldRunAgain = false;

watcher
  .on('add', function(path) { log('File', path, 'has been added'); })
  .on('addDir', function(path) { log('Directory', path, 'has been added'); })
  .on('change', function(path, stats) {
    log('File:', path, 'has been changed');

    if(!running){
      runProcess();
    } else {
      shouldRunAgain = true;
    }

  })
  .on('unlink', function(path) { log('File', path, 'has been removed'); })
  .on('unlinkDir', function(path) { log('Directory', path, 'has been removed'); })
  .on('error', function(error) { log('Error happened', error); })
  .on('ready', function() { log('Initial scan complete. Ready for changes.'); });

function runProcess() {
  running = true;

  const process = spawn('npm', ['run', command], {
    stdio: 'inherit'
  });

  process.on('close', function (code) {
    if (code === 1) {
      log('npm run packagr failed.');
    }
    running = false;
    if(shouldRunAgain){
      log('unbuilt changes, running again...');
      shouldRunAgain = false;
      runProcess();
    } else {
      log('watching for changes...');
    }
  });
}
