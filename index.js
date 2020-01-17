#!/usr/bin/env node

// Import modules
const files = require("./lib/files"); // TODO: remove if we don't actually use this.
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer  = require("./lib/inquirer");
const projectType = require("./lib/projectType")

// Setup our fancy terminal output
clear();

console.log(
    chalk.green(
        figlet.textSync("Build Project", { horizontalLayout: "default" })
    ),
);
console.log("  Quickly build a Laravel, Javascript, or Wordpress project.\n");

// Prompt the user to build the Project
const run = async () => {
    const askProjectType = await inquirer.askProjectType();
    projectType.projectType(askProjectType);
};

run();
