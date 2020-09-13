/* eslint-env node, mocha */
const assert = require('chai').assert
const shell = require('../lib/buildPython')

describe('#buildPythonProject', function () {
    it('returns true if a Python project is generated', async function () {
        const result = await shell.buildPythonProject('test/files')
        assert.equal(result, 'Python project built successfully!');
    });
});
