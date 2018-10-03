const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/multi-video/runtime.js',
    './dist/multi-video/polyfills.js',
    './dist/multi-video/scripts.js',
    './dist/multi-video/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/multi-video.js');
  await fs.copyFile(
    './dist/multi-video/styles.css',
    'elements/styles.css'
  );
})();