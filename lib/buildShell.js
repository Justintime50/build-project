const chalk = require('chalk');
const { exec } = require('child_process');
const files = require('./files')

async function buildShellProject(filepath) {
    // Generating a Shell project
    //
    // 1) Create a shell script with a shebang
    // 2) Make that script executable
    // 3) Print errors or success - return true if successful
    console.log('Generating Shell project...')
    files.createFile(`${filepath}/script.sh`, '#!/bin/bash')
    try {
        await exec(`chmod 755 ${filepath}/script.sh`, (err) => {
            if (err) {
                console.log(err)
                return err
            }
        });
        const message = 'Shell project built successfully!'
        console.log(chalk.green(message));
        return message
    } catch (error) {
        console.log(chalk.red(error));
        return error
    }
}

module.exports = {
    buildShellProject
}
