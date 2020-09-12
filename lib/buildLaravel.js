const chalk = require('chalk');
const { exec } = require('child_process');

async function buildLaravelProject() {
    console.log('Generating Laravel project...')
    exec('composer create-project --prefer-dist laravel/laravel myProject && mv myProject src && composer require laravel/ui --dev && php artisan ui vue --auth && php artisan storage:link', (error, stdout, stderr) => {
        if (error) {
            message = `Error: ${error.message}`;
            console.log(message);
            return message
        }
        console.log(`${stderr}`);
        console.log(`${stdout}`);
        // console.log(chalk.green('Laravel project built successfully!\n\nFollow the Laravel installation instructions here:\nhttps://laravel.com/docs/6.x'));
    });
}

module.exports = {
    buildLaravelProject
}
