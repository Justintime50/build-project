/* eslint-env node, mocha */
const assert = require('chai').assert
const docker = require('../lib/docker')

describe('Docker file contents', function () {
    it('returns the contents of the Dockerfile', function () {
        assert.include(docker.laravelDockerfile, 'FROM justintime50/nginx-php:7.4')
    });

    it('returns the contents of the docker-compose file', function () {
        assert.include(docker.laravelDockerCompose, 'myservice:')
        assert.include(docker.laravelDockerCompose, 'db:')
    });
});
