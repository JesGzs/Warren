const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    if(!message.channel.nsfw) { return message.channel.send("<a:758028512933445714:775884542933860352> Este canal no es NSFW`") }
    const DabiImages = require("dabi-images");
    const DabiClient = new DabiImages.Client();
    DabiClient.nsfw.real.ass() 
      .then((res) => {
        console.log('RES:', res.url) 
        message.channel.send(res.url) 
      })
      .catch((err) => { 
        console.error('ERR:', err)
      })
}


module.exports.help = {
  name: "ass"
}