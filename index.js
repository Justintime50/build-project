#!/usr/bin/env node

// Import modules
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const questions  = require("./lib/questions");
const general = require("./lib/general");
//const readme = require("build-readme");


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
    const askGeneralQuestions = await questions.askGeneralQuestions();
    general.useGeneralQuestions(askGeneralQuestions);
};

run();
