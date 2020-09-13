const chalk = require('chalk');
const exec = require('child_process').execSync;

async function buildWordpressProject(filepath) {
    // Initiate a Wordpress site
    try {
        const wordpressVersion = '5.5.1' // TODO: Longterm, the user should be able to choose which version
        console.log('Generating Wordpress project...')
        exec(`cd ${filepath} && curl -LJO https://github.com/WordPress/WordPress/archive/${wordpressVersion}.zip && unzip WordPress-${wordpressVersion}.zip && mv Wordpress-${wordpressVersion} src && rm WordPress-${wordpressVersion}.zip`, (err) => {
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
