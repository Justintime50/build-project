/* eslint-env node, mocha */
const assert = require('chai').assert
const filesystem = require('../lib/filesystem')

const testDir = 'test/temp'

describe('#getCurrentDirectoryBase', function () {
    it('returns the base directory of a path', function () {
        const result = filesystem.getCurrentDirectoryBase('./')
        assert.equal(result, 'build-project');
    });
});

describe('#directoryExists', function () {
    it('returns the result of checking a directory', function () {
        const result = filesystem.directoryExists('./')
        assert.equal(result, true);
    });
});

describe('#createFile', function () {
    it('returns error if a file cannot be generated', async function () {
        const result = await filesystem.createFile('///////~.123', 'dummy content')
        assert.include(result.message, 'open \'///////~.123\'');
    });
});

describe('#createDir', function () {
    it('returns true if a dir can be created', async function () {
        const result = await filesystem.createDir(`${testDir}/test-created-dir`)
        assert.equal(result, true);
    });

    it('returns error if a dir cannot be created', async function () {
        const result = await filesystem.createDir('///////~.123')
        assert.include(result.message, 'mkdir \'///////~.123\'');
    });
});

describe('#removeDir', function () {
    it.skip('returns error if a dir cannot be removed', async function () {
        // TODO: According to https://nodejs.org/api/fs.html#fs_fs_rmdir_path_options_callback
        // fs.rmdir does not return an error when using the recursive option
        // and as such, this cannot be easily tested without more tweaking. Correct in the longterm
        const result = await filesystem.removeDir(`${testDir}/some-dir-that-does-not-exist`)
        assert.include(result, undefined);
    });
});
