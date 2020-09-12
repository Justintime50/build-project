const fs = require('fs');
const chalk = require('chalk');
const files = require('./files');
const { exec } = require('child_process');
const buildLaravel = require('./buildLaravel');
const buildJavascript = require('./buildNode');
const buildPython = require('./buildPython');
const buildWordpress = require('./buildWordpress');
const buildShell = require('./buildShell');
const licenses = require('./licenses');
const docker = require('./docker');

function run(askGeneralQuestions) {

    // Check to see if there is already a project with the same name
    if (files.directoryExists(askGeneralQuestions.dirName)) {
        console.log(chalk.red('A project with that name already exists!'));
        process.exit();
    }

    // Create the project dir
    fs.mkdirSync(askGeneralQuestions.dirName);
    process.chdir(askGeneralQuestions.dirName);

    // Initiate a gitignore if the user answers yes
    if (askGeneralQuestions.assets) {
        fs.mkdirSync('assets'); // TODO: May look into creating an assets branch via git instead: https://gist.github.com/joncardasis/e6494afd538a400722545163eb2e1fa5
        console.log(chalk.green('"assets" folder created for README assets'));
    }
    // fs.mkdirSync('src'); // breaks other things, each project will need to setup the src dir themselves

    // Initiate a git repo if user answers yes
    if (askGeneralQuestions.gitInit) {
        exec('git init', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }

    // Initiate a gitignore if the user answers yes
    if (askGeneralQuestions.gitIgnore) {
        fs.writeFileSync('.gitignore', '.DS_Store\n.idea\n');
        console.log(chalk.green('.gitignore file generated.'));
    }

    // Initiate a travis.yml file if the user answers yes
    if (askGeneralQuestions.travis) {
        fs.writeFileSync('.travis.yml', 'language:\n\nscript:\n');
        console.log(chalk.green('.travis.yml file generated.'));
    }

    // Generate a license if elected
    if (askGeneralQuestions.license == 'MIT') {
        fs.writeFileSync('LICENSE', licenses.MIT);
        console.log(chalk.green('LICENSE file generated.'));
    }
    if (askGeneralQuestions.license == 'GPL') {
        fs.writeFileSync('LICENSE', licenses.GPL);
        console.log(chalk.green('LICENSE file generated.'));
    }
    if (askGeneralQuestions.license == 'None') {
        console.log(chalk.yellow('LICENSE file generation skipped.'));
    }

    // Generate a Dockerfile
    if (askGeneralQuestions.dockerfile == 'Laravel') {
        fs.writeFileSync('Dockerfile', docker.laravelDockerfile);
        console.log(chalk.green('Laravel Dockerfile generated.'));
    }

    // Generate a docker-compose file
    if (askGeneralQuestions.dockerCompose == 'Laravel') {
        fs.writeFileSync('docker-compose.yml', docker.laravelDockerCompose);
        console.log(chalk.green('Laravel docker-compose.yml generated.'));
    }

    // Follow the flow that the user chose for the project they want to build
    if (askGeneralQuestions.type == 'Laravel') {
        buildLaravel.buildLaravelProject(askGeneralQuestions);
    }
    if (askGeneralQuestions.type == 'Node') {
        buildJavascript.buildNodeProject(askGeneralQuestions);
    }
    if (askGeneralQuestions.type == 'Python') {
        buildPython.buildPythonProject(askGeneralQuestions);
    }
    if (askGeneralQuestions.type == 'Wordpress') {
        buildWordpress.buildWordpressProject(askGeneralQuestions);
    }
    if (askGeneralQuestions.type == 'Shell') {
        buildShell.buildShellProject(askGeneralQuestions.dirName);
    }
    if (askGeneralQuestions.type == 'Custom') {
        console.log(chalk.green('Custom project select, boilerplate setup skipped.'));
    }

}

module.exports = {
    run,
}
