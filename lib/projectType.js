
const buildLaravel = require("./buildLaravel")
const buildJavascript = require("./buildJavascript")
const buildWordpress = require("./buildWordpress")

module.exports = {
    projectType: async (askProjectType) => {

        if (askProjectType.type == "Laravel") {
            buildLaravel.buildLaravelProject();
        }

        if (askProjectType.type == "Javascript") {
            buildJavascript.buildJavascriptProject();
        }
        
        if (askProjectType.type == "Wordpress") {
            buildWordpress.buildWordpressProject();
        }

    }
}
