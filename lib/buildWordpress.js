const chalk = require('chalk');
const exec = require('child_process').execSync;

function buildWordpressProject(filepath) {
    // Generating a Wordpress project
    //
    // 1) Download and unzip Wordpress
    // 2) Move Wordpress to a "src" directory and remove the old zip
    // 3) Print success/errors, return success message
    try {
        const wordpressVersion = '5.5.1' // TODO: Longterm, the user should be able to choose which version
        console.log('Generating Wordpress project...')
        exec(`cd ${filepath} && curl -sLJO https://github.com/WordPress/WordPress/archive/${wordpressVersion}.zip && unzip -q WordPress-${wordpressVersion}.zip -d src && rm WordPress-${wordpressVersion}.zip`, (err) => {
            if (err) {
                console.log(err)
                return err
            }
        });
        const message = 'Wordpress project built successfully!\n\nFollow the Wordpress installation instructions here:\nhttps://wordpress.org/support/article/how-to-install-wordpress/'
        console.log(chalk.green(message));
        return message
    } catch (error) {
        console.log(chalk.red(error))
        return error
    }
}

module.exports = {
    buildWordpressProject,
}
