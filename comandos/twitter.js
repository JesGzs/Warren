const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => { 

        let user = args[0];
        let text = args.slice(1).join(" ");

        let m = await message.channel.send("**Por favor espera...**");

        if(!user){
            return m.edit("**Nesesitas poner un twit!**");
        }

        if(!text){
            return m.edit("**No has puesto el Twit!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**Nuevo Twit publicado por ${user}**`, attachment);
            m.delete({ timeout: 5000});
        } catch(e){
            m.edit("Error prueba de nuevo");
        }
    }
    module.exports.help = {
        name: "twitter"
      }