/* eslint-env node, mocha */
const assert = require('chai').assert
const shell = require('../lib/buildShell')

const testDir = 'test/temp'

describe('#buildShellProject', function () {
    it('returns true if a shell project is generated', async function () {
        const result = await shell.buildShellProject(testDir)
        assert.equal(result, 'Shell project built successfully!');
    });
});
