const chalk = require('chalk');
const exec = require('child_process').execSync;

function buildLaravelProject(filepath) {
    try {
        console.log('Generating Laravel project...')
        exec(`composer create-project --prefer-dist laravel/laravel ${filepath}/src && cd ${filepath}/src && composer require laravel/jetstream && php artisan storage:link && cd ..`, (err) => {
            if (err) {
                console.log(err)
                return err
            }
        });
        const message = 'Laravel project built successfully!\n\nFollow the Laravel installation instructions here:\nhttps://laravel.com/docs'
        console.log(chalk.green(message));
        return message
    } catch (error) {
        console.log(chalk.red(error))
        return error
    }
}

module.exports = {
    buildLaravelProject
}
