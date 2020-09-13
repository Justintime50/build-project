/* eslint-env node, mocha */
const filesystem = require('../lib/filesystem')

before(async () => {
    await filesystem.createDir('./test/files')
});

after(async () => {
    await filesystem.removeDir('./test/files')
});
