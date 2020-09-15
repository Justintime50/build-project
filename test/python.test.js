/* eslint-env node, mocha */
const assert = require('chai').assert
const shell = require('../lib/buildPython')

const testDir = 'test/temp'

describe('#buildPythonProject', function () {
    it('returns true if a Python project is generated', async function () {
        const result = await shell.buildPythonProject(testDir)
        assert.equal(result, 'Python project built successfully!');
    });
});
