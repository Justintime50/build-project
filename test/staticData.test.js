/* eslint-env node, mocha */
const assert = require('chai').assert
const staticData = require('../lib/staticData')

describe('License contents', function () {
    it('returns the MIT license contents', function () {
        assert.include(staticData.MitLicense, 'Copyright <YEAR> <COPYRIGHT HOLDER>')
    });

    it('returns the GPL license contents', function () {
        assert.include(staticData.GplLicense, 'GNU GENERAL PUBLIC LICENSE')
    });
});

describe('Docker file contents', function () {
    it('returns the contents of the Dockerfile', function () {
        assert.include(staticData.laravelDockerfile, 'FROM justintime50/nginx-php:7.4')
    });

    it('returns the contents of the docker-compose file', function () {
        assert.include(staticData.laravelDockerCompose, 'myservice:')
        assert.include(staticData.laravelDockerCompose, 'db:')
    });
});

describe('Python setup.py contents', function () {
    it('returns the contents of the Python setup.py file', function () {
        assert.include(staticData.setupPy, 'import setuptools')
    });
});

describe('Node package.json contents', function () {
    it('returns the contents of the Node package.json file', function () {
        assert.include(staticData.nodePackage, '"name": "project-name"')
    });
});
