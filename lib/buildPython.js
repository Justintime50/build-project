const fs = require("fs");
const chalk = require("chalk");
require("child_process");

module.exports = {
    buildPythonProject: async () => {

        // Create python file and requirements file
        fs.writeFileSync("python.py", "\"\"\" My Python File \"\"\"\n");
        fs.writeFileSync("requirements.txt", "pylint\n");
        console.log(chalk.green("Python project built successfully!"));

    }
}
