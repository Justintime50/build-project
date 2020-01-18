#!/usr/bin/env node

// Import modules
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer  = require("./lib/inquirer");
const general = require("./lib/general")

// Setup our fancy terminal output
clear();

console.log(
    chalk.green(
        figlet.textSync("Build Project", { horizontalLayout: "default" })
    ),
);
console.log("Built by Justintime50.\n\nSetup projects quickly such as Laravel, Node, and Wordpress.\n");

// Run the main program flow
const run = async () => {
    const askGeneralQuestions = await inquirer.askGeneralQuestions();
    general.useGeneralQuestions(askGeneralQuestions);
};

run();
