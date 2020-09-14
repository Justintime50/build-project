#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const questions = require('./lib/questions');
const general = require('./lib/general');
// const readme = require('build-readme');

// Start the CLI prompt
!async function () {
    clear();
    console.log(
        chalk.green(
            figlet.textSync('Build Project', { horizontalLayout: 'default' })
        ),
    );
    console.log('Boilerplate setup for all your favorite languages and frameworks.\n');
    const setupQuestions = questions.setupQuestions();
    // const readmeQuestions = readme.setupQuestions();
    const prompt = await questions.promptQuestions(setupQuestions).catch(console.log);
    // const readmePrompt = await questions.promptQuestions(readmeQuestions).catch(console.log);
    // const finalQuestions = prompt + readmePrompt
    general.run(prompt);
}()
