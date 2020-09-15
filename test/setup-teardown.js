/* eslint-env node, mocha */
const filesystem = require('../lib/filesystem')

const testDir = 'test/temp'

before(async () => {
    await filesystem.removeDir(testDir)
    await filesystem.createDir(testDir)
});

after(async () => {
    await filesystem.removeDir(testDir)
});
