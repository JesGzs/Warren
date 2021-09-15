const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {


message.delete()


let txt = args.join('%20');  //Argumentos 

if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") //Si no hay argumentos...
	
let autor = message.author; //Definimos autor

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') //Pedimos la imagen

message.channel.send(attachment)	//La enviamos

}
  module.exports.help = {
  name: "pornhub"
}
