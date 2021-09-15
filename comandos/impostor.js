const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {


            const mencionado = message.mentions.members.first() 
            
            let random = [
            "No era el impostor",
            "Era el impostor"
            ] 
            
            
            if(!mencionado)
            
             return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
            
            　　　.　　　 　　.　　　　　。　　 。　. 　
            
            .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
            
            　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
            
            　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
            
            　　ﾟ　　　.　　　. ,　　　　.　 .`) 
            
            message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
            
            　　　.　　　 　　.　　　　　。　　 。　. 　
            
            .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
            
            　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
            
            　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
            
            　　ﾟ　　　.　　　. ,　　　　.　 .`)
            }
          
        module.exports.help = {
            name: "impostor"
          }
        