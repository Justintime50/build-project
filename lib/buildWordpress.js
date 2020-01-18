const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildWordpressProject: async (askGeneralQuestions) => {

        // Initiate a Wordpress site
        const wordpressVersion = "5.3.2"
        console.log("Downloading & unziping Wordpress...")
        exec(
            "curl -LJO https://github.com/WordPress/WordPress/archive/" 
            + wordpressVersion 
            + ".zip && unzip WordPress-" 
            + wordpressVersion 
            + ".zip && mv Wordpress-"
            + wordpressVersion
            + " src && rm WordPress-"
            + wordpressVersion 
            + ".zip", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                console.log(chalk.green("Wordpress project built successfully!\n\nFollow the Wordpress installation instructions here:\nhttps://wordpress.org/support/article/how-to-install-wordpress/"));
                return;
            }
            console.log(`${stdout}`);
        });

    }
}
