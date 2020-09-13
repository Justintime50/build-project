/* eslint-env node, mocha */
const assert = require('chai').assert
const general = require('../lib/general')

describe('#initializeGitRepo', function () {
    it('returns true if a Git repo is initialized', async function () {
        const result = await general.initializeGitRepo('test/files')
        assert.equal(result, 'Git repo initialized!');
    });
});

describe('#createProjectDir', function () {
    it('returns true if a project directory is created', async function () {
        const result = await general.createProjectDir('test/files/testdir')
        assert.equal(result, 'test/files/testdir');
    });

    it('returns false if a project directory already exists with that name', async function () {
        const result = await general.createProjectDir('test/files/testdir')
        assert.equal(result, 'A project with that name already exists!');
    });
});

describe('#createAssetsFolder', function () {
    it('returns true if an assets folder is created', async function () {
        const result = await general.createAssetsFolder('test/files')
        assert.equal(result, '"assets" folder created!');
    });
});

describe('#createGitIgnore', function () {
    it('returns true if a gitignore file is created', async function () {
        const result = await general.createGitIgnore('test/files')
        assert.equal(result, '".gitignore" file created!');
    });
});
