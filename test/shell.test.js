/* eslint-env node, mocha */
const assert = require('chai').assert
const shell = require('../lib/buildShell')

describe('#buildShellProject', function () {
    it('returns true if a shell project is generated', async function () {
        const result = await shell.buildShellProject('test/files')
        assert.equal(result, 'Shell project built successfully!');
    });

    // it('returns error if a shell project cannot be generated', async function () {
    //     const result = await shell.buildShellProject('/////123*.x')
    //     assert.include(result.message, 'open \'/////123*.x/script.sh\'');
    // });
});

// describe('#directoryExists', function () {
//     it('returns the result of checking a directory', function () {
//         const result = files.directoryExists('./')
//         assert.equal(result, true);
//     });
// });
