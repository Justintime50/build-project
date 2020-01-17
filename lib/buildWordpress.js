
const fs = require("fs"); // TODO: remove if we don't actually use this.
const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildWordpressProject: async (buildWordpressProject) => {

        // Initiate a Wordpress site
        exec("curl -LJO https://github.com/WordPress/WordPress/archive/5.3.2.zip", (error, stdout, stderr) => {
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
        console.log(chalk.green("Wordpress project built successfully!"));

    }
}
