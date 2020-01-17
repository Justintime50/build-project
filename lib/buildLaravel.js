
const fs = require("fs"); // TODO: remove if we don't actually use this.
const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildLaravelProject: async (buildLaravelProject) => {
        
        // Initiate a Wordpress site
        exec("composer create-project --prefer-dist laravel/laravel myProject", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });

        // TODO: Need await/async here
        console.log(chalk.green("Laravel project built successfully!"));

    }
}