const inquirer = require("inquirer");

module.exports = {
    askProjectType: () => {
        const questions = [
            {
            name: "type",
            type: "list",
            message: "What kind of project are you building?",
            choices: [
                "Laravel",
                "Javascript",
                "Wordpress", 
                ],
            },
    ];
    return inquirer.prompt(questions);
    },
};
