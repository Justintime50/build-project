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
console.log("Boilerplate setup for all your favorite languages and frameworks.\n");

// Run the main program flow
const run = async () => {
    const askGeneralQuestions = await inquirer.askGeneralQuestions();
    general.useGeneralQuestions(askGeneralQuestions);
};

run();
