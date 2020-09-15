/* eslint-env node, mocha */
const assert = require('chai').assert
const node = require('../lib/buildNode')

const testDir = 'test/temp'

describe('#buildNodeProject', function () {
    it('returns true if a Node project is generated', async function () {
        this.timeout(10000);
        const result = await node.buildNodeProject(testDir)
        assert.equal(result, 'Node project built successfully!');
    });
});
