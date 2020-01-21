const inquirer = require("inquirer");

module.exports = {
    askGeneralQuestions: () => {
        const questions = [
            {
                name: "dirName",
                type: "input",
                message: "What's the name of this project folder?",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return "Please enter a name for this project's directory.";
                    }
                },
            },
            {
                name: "assets",
                type: "confirm",
                message: "Would you like create an assets folder (eg: for README assets)?",
            },
            {
                name: "gitInit",
                type: "confirm",
                message: "Would you like to initiate a git repo?",
            },
            {
                name: "gitIgnore",
                type: "confirm",
                message: "Would you like to generate a .gitignore file?",
            },
            {
                name: "travis",
                type: "confirm",
                message: "Would you like to generate .travis.yml file?",
            },
            {
                name: "license",
                type: "list",
                message: "What license would you like to generate?",
                choices: [
                    "MIT",
                    "GPL",
                    "None",
                    ],
            },
            {
                name: "dockerfile",
                type: "list",
                message: "What Dockerfile would you like to generate?",
                choices: [
                    "Laravel",
                    "None",
                    ],
            },
            {
                name: "dockerCompose",
                type: "list",
                message: "What docker-compose file would you like to generate?",
                choices: [
                    "Laravel",
                    "None",
                    ],
            },
            {
                name: "type",
                type: "list",
                message: "What kind of project are you building?",
                choices: [
                    "Laravel",
                    "Node",
                    "Wordpress",
                    "Shell",
                    "Custom",
                    ],
            },
        ];
        return inquirer.prompt(questions);
    },
};
