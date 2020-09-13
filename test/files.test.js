/* eslint-env node, mocha */
const assert = require('chai').assert
const filesystem = require('../lib/filesystem')

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
