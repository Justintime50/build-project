const chalk = require('chalk');
const filesystem = require('./filesystem');
const staticData = require('./staticData');

function buildPythonProject(filepath) {
    // Generating a Python project
    //
    // 1) Create a blank init file
    // 2) Create an opinionated setup.py file
    // 3) TODO: Install pacakges?
    // 4) Print success/errors, return success message
    try {
        console.log('Generating Python project...')
        filesystem.createFile(`${filepath}/__init__.py`, '');
        filesystem.createFile(`${filepath}/setup.py`, staticData.setupPy);
        // TODO: Install packages from setup.py here? Tricky with different invocations of Python per OS
        const message = 'Python project built successfully!'
        console.log(chalk.green(message));
        return message
    } catch (error) {
        console.log(chalk.red(error))
        return error
    }

}

module.exports = {
    buildPythonProject,
}
