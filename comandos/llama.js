const randomGen = require("image-gen-discord");


module.exports.run = async (client, message, args) => {

    randomGen.alpaca(message, "message");
    }
    module.exports.help = {
        name: "llama"
      }