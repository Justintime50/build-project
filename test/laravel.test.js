/* eslint-env node, mocha */
const assert = require('chai').assert
const laravel = require('../lib/buildLaravel')

const testDir = 'test/temp'

describe('#buildLaravelProject', function () {
    it.skip('returns true if a Laravel project is generated', async function () {
        // TODO: Mock this as running the Laravel commands takes 30+ seconds to run
        // Skipping for now...
        this.timeout(60000); // This isn't great for fast unit testing
        const result = await laravel.buildLaravelProject(testDir)
        assert.include(result, 'Laravel project built successfully!');
    });
});
