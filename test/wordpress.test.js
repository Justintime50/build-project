/* eslint-env node, mocha */
const assert = require('chai').assert
const wordpress = require('../lib/buildWordpress')

const testDir = 'test/temp'

describe('#buildWordpressProject', function () {
    it('returns true if a Wordpress project is generated', async function () {
        this.timeout(10000);
        const result = await wordpress.buildWordpressProject(testDir)
        assert.include(result, 'Wordpress project built successfully!');
    });
});
