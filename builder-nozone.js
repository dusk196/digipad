const { version, contributors } = require('./package.json');
const fs = require('fs-extra');
const concat = require('concat');

(async () => {

    const files = [
        './dist/digipad/runtime.js',
        './dist/digipad/main.js'
    ];

    await fs.ensureDir('./dist/digipad/v' + version);
    await concat(files, './dist/digipad/v' + version + '/digipad-nozone.min.js');

    const data = fs.readFileSync('./dist/digipad/v' + version + '/digipad-nozone.min.js');
    const fd = fs.openSync('./dist/digipad/v' + version + '/digipad-nozone.min.js', 'w+');
    const insert = Buffer.from('/**\n * DiGiPaD (without zone.js) v' + version + '\n * By ' + contributors.join(', ') + '\n * ' + Date() + '\n */\n');

    await fs.write(fd, insert, 0, insert.length, 0);
    await fs.write(fd, data, 0, data.length, insert.length);
    fs.close(fd, (err) => { if (err) throw err; });

})();