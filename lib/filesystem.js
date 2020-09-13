const fs = require('fs');
const path = require('path');

// Scan the current directory for a project that already exists
function getCurrentDirectoryBase() {
    return path.basename(process.cwd());
}

function directoryExists(filePath) {
    return fs.existsSync(filePath);
}

async function createFile(filepath, contents) {
    try {
        await fs.promises.writeFile(filepath, contents);
    } catch (error) {
        console.log(error)
        return error
    }
}

async function createDir(path) {
    try {
        await fs.promises.mkdir(path, { recursive: true });
    } catch (error) {
        console.log(error)
        return error
    }
}

async function removeDir(path) {
    try {
        await fs.promises.rmdir(path, { recursive: true });
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports = {
    getCurrentDirectoryBase,
    directoryExists,
    createFile,
    createDir,
    removeDir,
};
