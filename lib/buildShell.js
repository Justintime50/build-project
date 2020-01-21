const fs = require("fs"); // TODO: remove if we don't actually use this.
const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildShellProject: async (buildWordpressProject) => {

        // Initiate a Shell project
        fs.writeFileSync("script.sh", "#!/bin/bash");
        exec("chmod 755 script.sh", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                console.log(chalk.green("Shell project built successfully!"));
                return;
            }
            console.log(`${stdout}`);
        });

    }
}
