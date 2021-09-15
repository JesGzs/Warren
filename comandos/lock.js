const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {


const Discord = require('discord.js')  


var permisos = message.member.hasPermission("ADMINISTRATOR") 

if(!permisos) return message.channel.send("No tienes permisos para ejecutar este comando") 

		let aceptenmeelcodepls = message.guild.roles.cache.find(rolstaff => rolstaff.name === 'NOMBRE DEL ROL PARA STAFF')

		let alluser = message.guild.roles.cache.find(aus => aus.name === '@everyone')

		if(!message.member.hasPermission("ADMINISTRATOR") )return message.reply(':no_entry_sign: **| No tienes permisos Suficientes!**');

		message.channel.updateOverwrite(alluser, { READ_MESSAGE_HISTORY: false, SEND_MESSAGES: false });

    	message.channel.updateOverwrite(aceptenmeelcodepls, { READ_MESSAGE_HISTORY: true, SEND_MESSAGES: true });

    	const canalblock = new Discord.MessageEmbed() 

        	.setDescription("**Chat bloqueado! 🔒**") 

        	.setColor('#4bbf5c') 

    	message.channel.send(canalblock); 



	}

        module.exports.help = {
            name: "lock"
          }
        