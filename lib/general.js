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
    // Check to see if there is already a project with the same name
    // Exit if true, continue if false
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
    filesystem.createDir(`${path}/assets`); // TODO: May look into creating an assets branch via git instead: https://gist.github.com/joncardasis/e6494afd538a400722545163eb2e1fa5
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

function run(askGeneralQuestions) {
    const path = askGeneralQuestions.dirName
    createProjectDir(path)

    // Initiate a gitignore if the user answers yes
    if (askGeneralQuestions.assets) {
        createAssetsFolder(path)
    }

    // Initiate a git repo if user answers yes
    if (askGeneralQuestions.gitInit) {
        initializeGitRepo(path)
    }

    // Initiate a gitignore if the user answers yes
    if (askGeneralQuestions.gitIgnore) {
        createGitIgnore(path)
    }

    // Initiate a travis.yml file if the user answers yes
    if (askGeneralQuestions.travis) {
        filesystem.createFile('.travis.yml', 'language:\n\nscript:\n');
        console.log(chalk.green('.travis.yml file generated.'));
    }

    // Generate a license if elected
    if (askGeneralQuestions.license == 'MIT') {
        filesystem.createFile('LICENSE', staticData.MitLicense);
        console.log(chalk.green('LICENSE file generated.'));
    } else if (askGeneralQuestions.license == 'GPL') {
        filesystem.createFile('LICENSE', staticData.GplLicense);
        console.log(chalk.green('LICENSE file generated.'));
    } else if (askGeneralQuestions.license == 'None') {
        console.log(chalk.yellow('LICENSE file generation skipped.'));
    } else {
        console.log(chalk.red('Could not determine action to take with License'))
        process.exit();
    }

    // Generate a Dockerfile
    if (askGeneralQuestions.dockerfile == 'Laravel') {
        filesystem.createFile('Dockerfile', staticData.laravelDockerfile);
        console.log(chalk.green('Laravel Dockerfile generated.'));
    }

    // Generate a docker-compose file
    if (askGeneralQuestions.dockerCompose == 'Laravel') {
        filesystem.createFile('docker-compose.yml', staticData.laravelDockerCompose);
        console.log(chalk.green('Laravel docker-compose.yml generated.'));
    }

    // Follow the flow that the user chose for the project they want to build
    if (askGeneralQuestions.type == 'Laravel') {
        buildLaravel.buildLaravelProject(path);
    } else if (askGeneralQuestions.type == 'Node') {
        buildJavascript.buildNodeProject(path);
    } else if (askGeneralQuestions.type == 'Python') {
        buildPython.buildPythonProject(path);
    } else if (askGeneralQuestions.type == 'Wordpress') {
        buildWordpress.buildWordpressProject(path);
    } else if (askGeneralQuestions.type == 'Shell') {
        buildShell.buildShellProject(path);
    } else if (askGeneralQuestions.type == 'Custom') {
        console.log(chalk.green('Custom project select, boilerplate setup skipped.'));
    } else {
        console.log(chalk.red('Could not determine what kind of project to build.'))
        process.exit();
    }
}

module.exports = {
    initializeGitRepo,
    createProjectDir,
    createAssetsFolder,
    createGitIgnore,
    run,
}
