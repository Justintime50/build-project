const fs = require("fs");
const chalk = require("chalk");
const files = require("./files");
const { exec } = require("child_process");
const buildLaravel = require("./buildLaravel")
const buildJavascript = require("./buildNode")
const buildWordpress = require("./buildWordpress")

module.exports = {

    useGeneralQuestions: (askGeneralQuestions) => {

        // Check to see if there is already a Readme
        if (files.directoryExists(askGeneralQuestions.dirName)) {
            console.log(chalk.red("A project with that name already exists!"));
            process.exit();
        }

        // Create the project dir
        fs.mkdirSync(askGeneralQuestions.dirName);
        process.chdir(askGeneralQuestions.dirName);
        fs.mkdirSync("assets"); // TODO: May look into creating an assets branch via git instead: https://gist.github.com/joncardasis/e6494afd538a400722545163eb2e1fa5
        console.log(chalk.green("\"assets\" folder created for README assets"));
        // fs.mkdirSync("src"); // breaks other things, each project will need to setup the src dir themselves

        // Initiate a git repo if user answers yes
        if (askGeneralQuestions.gitInit = "Yes") {
            exec("git init", (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`${stderr}`);
                    return;
                }
                console.log(`${stdout}`);
            });
        }

        // Follow the flow that the user chose for the project they want to build
        if (askGeneralQuestions.type == "Laravel") {
            buildLaravel.buildLaravelProject(askGeneralQuestions);
        }
        if (askGeneralQuestions.type == "Javascript") {
            buildJavascript.buildJavascriptProject(askGeneralQuestions);
        }
        if (askGeneralQuestions.type == "Wordpress") {
            buildWordpress.buildWordpressProject(askGeneralQuestions);
        }

    }
}
