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
                name: "gitInit",
                type: "confirm",
                message: "Would you like to initiate a git repo?",
            },
            {
                name: "type",
                type: "list",
                message: "What kind of project are you building?",
                choices: [
                    "Laravel",
                    "Node",
                    "Wordpress",
                    ],
            },
        ];
        return inquirer.prompt(questions);
    },
};
