/* eslint-env node, mocha */
const assert = require('chai').assert
const node = require('../lib/buildNode')

describe('#buildNodeProject', function () {
    it('returns true if a Node project is generated', async function () {
        this.timeout(10000);
        const result = await node.buildNodeProject('test/temp')
        assert.equal(result, 'Node project built successfully!');
    });
});
