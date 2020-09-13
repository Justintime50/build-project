/* eslint-env node, mocha */
const assert = require('chai').assert
const laravel = require('../lib/buildLaravel')

describe('#buildLaravelProject', function () {
    it.skip('returns true if a Laravel project is generated', async function () {
        // TODO: Mock this as running the Laravel commands takes 30+ seconds to run
        // Skipping for now...
        // this.timeout(60000); // Could set this to a large timeout but this isn't great for fast testing
        const result = await laravel.buildLaravelProject()
        assert.equal(result, 'build-readme');
    });
});
