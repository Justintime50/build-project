const buildLaravel = require("./buildLaravel")
const buildJavascript = require("./buildNode")
const buildWordpress = require("./buildWordpress")

module.exports = {
    projectType: async (askProjectType, askGeneralQuestions) => {

        if (askProjectType.type == "Laravel") {
            buildLaravel.buildLaravelProject(askGeneralQuestions);
        }

        if (askProjectType.type == "Javascript") {
            buildJavascript.buildJavascriptProject(askGeneralQuestions);
        }
        
        if (askProjectType.type == "Wordpress") {
            buildWordpress.buildWordpressProject(askGeneralQuestions);
        }

    }
}
