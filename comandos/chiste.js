const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 
const fetch = require("node-fetch")



const res = await fetch('https://risapi.bacanoicua.tk/')
const json = await res.json(); 


const embed = new Discord.MessageEmbed()


.addField("Chiste:", `${json.chiste}`)
.setFooter(` Pedido por: ${message.member.displayName}`, message.author.displayAvatarURL())


 message.channel.send(embed); 

}


        module.exports.help = {
            name: "chiste"
          }
        