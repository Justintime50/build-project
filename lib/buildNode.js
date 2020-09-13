const chalk = require('chalk');
const exec = require('child_process').execSync;
const filesystem = require('./filesystem');

function buildNodeProject(filepath) {
    try {
        console.log('Generating Node project...')
        filesystem.createFile(`${filepath}/index.js`, '#!/usr/bin/env node\n');
        // Initiate a package.json file
        // TODO: Interactive eslint config and npm init without -y flag
        // 'npx eslint --init'
        // TODO: Add all the dev dependencies here
        // TODO: NPM install?
        exec(`cd ${filepath} && npm init -y && npm install eslint --save-dev`, (err) => {
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
