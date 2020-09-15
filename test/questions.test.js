/* eslint-env node, mocha */
const assert = require('chai').assert
const questions = require('../lib/questions')

describe('#nameValidation', function () {
    it('returns true if a name is passed', function () {
        const result = questions.nameValidation('test-name')
        assert.equal(result, true);
    });

    it('returns a validation error if a name is not passed', function () {
        const result = questions.nameValidation('')
        assert.equal(result, 'Please enter a name for this project\'s directory.');
    });
});

describe('CLI questions', function () {
    it('returns the CLI questions', function () {
        const setupQuestions = questions.setupQuestions()
        assert.instanceOf(setupQuestions, Array)
        // Check that one of the questions gets returned
        assert.deepInclude(setupQuestions,
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
            }
        )
    });
});
