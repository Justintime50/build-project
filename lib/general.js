const chalk = require('chalk');
const exec = require('child_process').execSync;
const filesystem = require('./filesystem');
const buildLaravel = require('./buildLaravel');
const buildJavascript = require('./buildNode');
const buildPython = require('./buildPython');
const buildWordpress = require('./buildWordpress');
const buildShell = require('./buildShell');
const staticData = require('./staticData');

function initializeGitRepo(path) {
    exec(`cd ${path} && git init`, (err) => {
        if (err) {
            console.log(chalk.red(err))
            return err
        }
    });
    const message = 'Git repo initialized!'
    console.log(chalk.green(message));
    return message
}

function createProjectDir(path) {
    if (filesystem.directoryExists(path)) {
        const message = 'A project with that name already exists!'
        console.log(chalk.red(message));
        return message
    } else {
        filesystem.createDir(path);
        return path
    }
}

function createAssetsFolder(path) {
    // TODO: May look into creating an assets branch via git instead: https://gist.github.com/joncardasis/e6494afd538a400722545163eb2e1fa5
    filesystem.createDir(`${path}/assets`);
    const message = '"assets" folder created!'
    console.log(chalk.green(message));
    return message
}

function createGitIgnore(path) {
    filesystem.createFile(`${path}/.gitignore`, '.DS_Store\n.idea\n');
    const message = '".gitignore" file created!'
    console.log(chalk.green(message));
    return message
}

function createTravisYml(path) {
    filesystem.createFile(`${path}/.travis.yml`, 'language:\n\nscript:\n');
    const message = '".travis.yml" file created!'
    console.log(chalk.green(message));
    return message
}

function createLicenseFile(path, license) {
    if (license == 'MIT') {
        filesystem.createFile(`${path}/LICENSE`, staticData.MitLicense);
        const message = 'MIT "LICENSE" file created!'
        console.log(chalk.green(message));
        return message
    } else if (license == 'GPL') {
        filesystem.createFile(`${path}/LICENSE`, staticData.GplLicense);
        const message = 'GPL "LICENSE" file created!'
        console.log(chalk.green(message));
        return message
    } else {
        const error = 'Could not determine action to take with License.'
        console.log(chalk.red(error))
        return error
    }
}

function createDockerfile(path, dockerfile) {
    if (dockerfile == 'Laravel') {
        filesystem.createFile(`${path}/Dockerfile`, staticData.laravelDockerfile);
        const message = 'Laravel "Dockerfile" created!'
        console.log(chalk.green(message));
        return message
    } else {
        const error = 'Could not determine action to take with Dockerfile.'
        console.log(chalk.red(error))
        return error
    }
}

function createDockerCompose(path, compose) {
    if (compose == 'Laravel') {
        filesystem.createFile(`${path}/docker-compose.yml`, staticData.laravelDockerCompose);
        const message = 'Laravel "docker-compose.yml" file created!'
        console.log(chalk.green(message));
        return message
    } else {
        const error = 'Could not determine action to take with Docker Compose.'
        console.log(chalk.red(error))
        return error
    }
}

function generateProject(path, type) {
    var output
    if (type == 'Laravel') {
        output = buildLaravel.buildLaravelProject(path);
    } else if (type == 'Node') {
        output = buildJavascript.buildNodeProject(path);
    } else if (type == 'Python') {
        output = buildPython.buildPythonProject(path);
    } else if (type == 'Wordpress') {
        output = buildWordpress.buildWordpressProject(path);
    } else if (type == 'Shell') {
        output = buildShell.buildShellProject(path);
    } else if (type == 'Custom') {
        output = 'Custom project selected, boilerplate setup skipped.'
        console.log(chalk.yellow(output));
    } else {
        const error = 'Could not determine what kind of project to build.'
        console.log(chalk.red(error))
        return error
    }
    return output
}

function run(questions) {
    const path = questions.dirName
    createProjectDir(path)

    if (questions.assets) {
        createAssetsFolder(path)
    }

    if (questions.gitInit) {
        initializeGitRepo(path)
    }

    if (questions.gitIgnore) {
        createGitIgnore(path)
    }

    if (questions.travis) {
        createTravisYml(path)
    }

    if (questions.license != 'None') {
        createLicenseFile(path, questions.license)
    }

    if (questions.dockerfile != 'None') {
        createDockerfile(path, questions.dockerfile)
    }

    if (questions.dockerCompose != 'None') {
        createDockerCompose(path, questions.dockerCompose)
    }

    generateProject(path, questions.type)
}

module.exports = {
    initializeGitRepo,
    createProjectDir,
    createAssetsFolder,
    createGitIgnore,
    createTravisYml,
    createLicenseFile,
    createDockerfile,
    createDockerCompose,
    generateProject,
    run,
}
