const fs = require("fs");
const chalk = require("chalk");
const { exec } = require("child_process");

module.exports = {
    buildJavascriptProject: async (buildJavascriptProject) => {

        fs.writeFileSync("index.js", "#!/usr/bin/env node");
        // Initiate a package.json file
        // TODO: Interactive eslint config and npm init without -y flag
        // "npx eslint --init"
        exec("npm init -y && npm install eslint --save-dev && npm i", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`${stderr}`);
                console.log(chalk.green("Node project built successfully!"));
                return;
            }
            console.log(`${stdout}`);
        });

    }
}
