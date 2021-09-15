const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let txt =  encodeURIComponent(args.join(" "));
let ellink = `https://api.alexflipnote.dev/scroll?text=${txt}`
if(!args.join("  ")) return message.channel.send("<a:noxd:763155093989359656> | Especifica el Texto ")
 message.channel.send(ellink)
}


module.exports.help = {
    name: "scroll"
  }