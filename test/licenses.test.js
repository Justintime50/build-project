/* eslint-env node, mocha */
const assert = require('chai').assert
const licenses = require('../lib/licenses')

describe('License contents', function () {
    it('returns the MIT license contents', function () {
        assert.include(licenses.MIT, 'Copyright <YEAR> <COPYRIGHT HOLDER>')
    });

    it('returns the GPL license contents', function () {
        assert.include(licenses.GPL, 'GNU GENERAL PUBLIC LICENSE')
    });
});
