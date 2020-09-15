const chalk = require('chalk');
const exec = require('child_process').execSync;
const filesystem = require('./filesystem')

async function buildShellProject(filepath) {
    // Generating a Shell project
    //
    // 1) Create a shell script with a shebang
    // 2) Make that script executable
    // 3) Print errors or success - return success message
    try {
        console.log('Generating Shell project...')
        await filesystem.createFile(`${filepath}/script.sh`, '#!/bin/bash')
        exec(`chmod 755 ${filepath}/script.sh`, (err) => {
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
