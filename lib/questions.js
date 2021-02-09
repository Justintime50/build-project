const inquirer = require('inquirer');

function nameValidation(value) {
    if (!value.length) {
        return 'Please enter a name for this project\'s directory.';
    }
    return true;
}

function setupQuestions() {
    const questions = [
        {
            name: 'dirName',
            type: 'input',
            message: 'What\'s the name of this project folder?',
            validate: nameValidation
        },
        {
            name: 'readme',
            type: 'confirm',
            message: 'Would you like to generate a README.md file?',
        },
        {
            name: 'assets',
            type: 'confirm',
            message: 'Would you like create an assets folder (eg: for README assets)?',
        },
        {
            name: 'gitInit',
            type: 'confirm',
            message: 'Would you like to initiate a git repo?',
        },
        {
            name: 'gitIgnore',
            type: 'confirm',
            message: 'Would you like to generate a .gitignore file?',
        },
        {
            name: 'license',
            type: 'list',
            message: 'What license would you like to generate?',
            choices: [
                'MIT',
                'GPL',
                'None',
            ],
        },
        {
            name: 'dockerfile',
            type: 'list',
            message: 'What Dockerfile would you like to generate?',
            choices: [
                'Laravel',
                'None',
            ],
        },
        {
            name: 'dockerCompose',
            type: 'list',
            message: 'What docker-compose file would you like to generate?',
            choices: [
                'Laravel',
                'None',
            ],
        },
        {
            name: 'type',
            type: 'list',
            message: 'What kind of project are you building?',
            choices: [
                'Laravel',
                'Node',
                'Python',
                'Wordpress',
                'Shell',
                'Custom',
            ],
        },
    ];
    return questions
}

function promptQuestions(questions) {
    const prompt = inquirer.prompt(questions);
    return prompt
}

module.exports = {
    nameValidation,
    setupQuestions,
    promptQuestions,
};
