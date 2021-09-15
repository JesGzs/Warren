const randomGen = require("image-gen-discord");

module.exports.run = async (client, message, args) => {

    randomGen.camel(message, "message");
    }
      module.exports.help = {
        name: "camello"
      }