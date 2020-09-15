/* eslint-env node, mocha */
const assert = require('chai').assert
const general = require('../lib/general')

const testDir = 'test/temp'

describe('#initializeGitRepo', function () {
    it('returns true if a Git repo is initialized', async function () {
        const result = await general.initializeGitRepo(testDir)
        assert.equal(result, 'Git repo initialized!');
    });
});

describe('#createProjectDir', function () {
    it('returns true if a project directory is created', async function () {
        const result = await general.createProjectDir(`${testDir}/testdir`)
        assert.equal(result, 'test/temp/testdir');
    });

    it('returns false if a project directory already exists with that name', async function () {
        await general.createProjectDir(`${testDir}/testdir`)
        const result = await general.createProjectDir(`${testDir}/testdir`)
        assert.equal(result, 'A project with that name already exists!');
    });
});

describe('#createAssetsFolder', function () {
    it('returns true if an assets folder is created', async function () {
        const result = await general.createAssetsFolder(testDir)
        assert.equal(result, '"assets" folder created!');
    });
});

describe('#createGitIgnore', function () {
    it('returns true if a gitignore file is created', async function () {
        const result = await general.createGitIgnore(testDir)
        assert.equal(result, '".gitignore" file created!');
    });
});

describe('#createTravisYml', function () {
    it('returns true if a travis.yml file is created', async function () {
        const result = await general.createTravisYml(testDir)
        assert.equal(result, '".travis.yml" file created!');
    });
});

describe('#createLicenseFile', function () {
    it('returns true if an MIT LICENSE file is created', async function () {
        const result = await general.createLicenseFile(testDir, 'MIT')
        assert.equal(result, 'MIT "LICENSE" file created!');
    });

    it('returns true if a GPL LICENSE file is created', async function () {
        const result = await general.createLicenseFile(testDir, 'GPL')
        assert.equal(result, 'GPL "LICENSE" file created!');
    });

    it('returns false if a LICENSE file cannot be created', async function () {
        const result = await general.createLicenseFile(testDir, 'Bad License Selector')
        assert.equal(result, 'Could not determine action to take with License.');
    });
});

describe('#createDockerfile', function () {
    it('returns true if a Dockerfile is created', async function () {
        const result = await general.createDockerfile(testDir, 'Laravel')
        assert.equal(result, 'Laravel "Dockerfile" created!');
    });

    it('returns false if a Dockerfile cannot be created', async function () {
        const result = await general.createDockerfile(testDir, 'Bad Dockerfile Selector')
        assert.equal(result, 'Could not determine action to take with Dockerfile.');
    });
});

describe('#createDockerCompose', function () {
    it('returns true if a docker-compose.yml file is created', async function () {
        const result = await general.createDockerCompose(testDir, 'Laravel')
        assert.equal(result, 'Laravel "docker-compose.yml" file created!');
    });

    it('returns false if a docker-compose.yml file cannot be created', async function () {
        const result = await general.createDockerCompose(testDir, 'Bad Docker Compose Selector')
        assert.equal(result, 'Could not determine action to take with Docker Compose.');
    });
});

describe('#generateProject', function () {
    it('returns true if a custom project is selected', async function () {
        const result = await general.generateProject(testDir, 'Custom')
        assert.equal(result, 'Custom project selected, boilerplate setup skipped.');
    });

    it('returns false if a project cannot be created', async function () {
        const result = await general.generateProject(testDir, 'Bad Type Selector')
        assert.equal(result, 'Could not determine what kind of project to build.');
    });
});
