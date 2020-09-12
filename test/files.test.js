/* eslint-env node, mocha */
const assert = require('chai').assert
const files = require('../lib/files')

describe('#getCurrentDirectoryBase', function () {
    it('returns the base directory of a path', function () {
        const result = files.getCurrentDirectoryBase('./')
        assert.equal(result, 'build-project');
    });
});

describe('#directoryExists', function () {
    it('returns the result of checking a directory', function () {
        const result = files.directoryExists('./')
        assert.equal(result, true);
    });
});

describe('#createFile', function () {
    it('returns error if a file cannot be generated', async function () {
        const result = await files.createFile('///////~.123', 'dummy content')
        assert.include(result.message, 'open \'///////~.123\'');
    });
});
