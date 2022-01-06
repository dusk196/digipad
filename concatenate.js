const { version } = require('./package.json');

const fs = require('fs-extra');
const concat = require('concat');

(async () => {
    const files = [
        './dist/digipad/runtime.js',
        './dist/digipad/polyfills.js',
        './dist/digipad/main.js'
    ]
    await fs.ensureDir('./dist/digipad/v' + version)
    await concat(files, './dist/digipad/v' + version + '/digipad.js');
})();