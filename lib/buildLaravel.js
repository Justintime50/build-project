const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildLaravelProject: async () => {
        
        // Initiate a Wordpress site
        exec("composer create-project --prefer-dist laravel/laravel myProject && mv myProject src && composer require laravel/ui --dev && php artisan ui vue --auth && php artisan storage:link", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                console.log(chalk.green("Laravel project built successfully!\n\nFollow the Laravel installation instructions here:\nhttps://laravel.com/docs/6.x"));
                return;
            }
            console.log(`${stdout}`);
        });

    }
}
