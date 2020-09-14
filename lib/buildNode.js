const chalk = require('chalk');
const exec = require('child_process').execSync;
const filesystem = require('./filesystem');
const staticData = require('./staticData');

function buildNodeProject(filepath) {
    // Generating a Node project
    //
    // 1) Create an index.js file
    // 2) Create an opinionated package.json template file
    // 3) Install project dependencies
    // 4) Print errors or success - return success message
    try {
        console.log('Generating Node project...')
        filesystem.createFile(`${filepath}/index.js`, '#!/usr/bin/env node\n');
        filesystem.createFile(`${filepath}/package.json`, staticData.nodePackage);
        exec(`cd ${filepath} && npm install`, (err) => {
            if (err) {
                console.log(err)
                return err
            }
        });
        const message = 'Node project built successfully!'
        console.log(chalk.green(message));
        console.log('Configure ESLint with `npx eslint --init`');
        return message
    } catch (error) {
        console.log(chalk.red(error))
        return error
    }
}

module.exports = {
    buildNodeProject,
}
