module.exports.run = async (client, message, args) => {
    const Discord = require("discord.js")
    const db = require("megadb")
    const profile = new db.crearDB("pofile")
    const { MessageEmbed } = require('discord.js')        
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 

    let badges1 = {
        
        'EARLY_SUPPORTER': '<:early:788162906285670440>',
  'DISCORD_EMPLOYEE': '<:employe:788162906005045290>',
  'DISCORD_PARTNER': '<:partener:788162904842698762>',
  'HYPESQUAD_EVENTS': '<:hypesquadevents:788162904494309396>',
  'HOUSE_BRAVERY': '<:bravery:788162906298384405>',
  'HOUSE_BRILLIANCE': '<:BrillianceLogo:788162901588181002>',
  'BUGHUNTER_LEVEL_1': '<:BugHunter:772931336314945567>',
  'BUGHUNTER_LEVEL_2': '<:9552_BugHunterLvl2:772931345793024000>',
  'VERIFIED_DEVELOPER': '<:verified:788162897771495474>',
  'HOUSE_BALANCE': '<:BalanceLogo:788162899121143809>',
  'VERIFIED_BOT': 'Bot Verificado',
      }
      
  
      
  
      let obj = {
      "HOUSE_BRAVERY" : "Bravery" , "VERIFIED_BOT" : "Bot verificado" , "VWERIFIED_DEVELOPER" : "Desarrollador de bots verificado" , "HOUSE_BRILLIANCE" : "Brilliance" , "DISCORD_PARTNER" : "Socio de discord"
      }
      const member = message.mentions.members.first() || message.member
    
            let status; 
            switch (user.presence.status) {
                case "online":
                    status = "🟢 En linea";
                    break;
                case "dnd":
                    status = "⛔ No molestar";
                    break;
                case "idle":
                    status = "🌙 Ausente";
                    break;
                case "offline":
                    status = "⚪ Desconectado";
                    break;
            }

             if(!profile.has(`${message.guild.id}.${user.id}`)) {
          await profile.set(`${message.guild.id}.${user.id}`, {
                desc: "No definida",
                color: "",
                titulo: "No hay estado aun `w.set` para poner uno"
           })
        }
        let {crearDB} = require("megadb") 
    let warns = new crearDB("warns"); 
    let titu = await profile.get(`${message.guild.id}.${user.id}.titulo`)
         let woser =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
            let count = await warns.obtener(`${message.guild.id}.${woser.id}`) 
            const embed = new Discord.MessageEmbed() 
                .setDescription("***__Informacion General__***")
                .setTitle(`Informacion del usuario ${user.user.username}`) 
                .setColor(`RANDOM`)
                .setThumbnail(user.user.displayAvatarURL({dynamic : true})) 
                .addFields(
                    {
                        name: "Apodo: ",
                        value: `${member.nickname !== null ? `${member.nickname}` : 'No tiene apodo'}`,
                        inline: false
                    },
                    {
                        name: "#️⃣ Tag: ",
                        value: `#${user.user.discriminator}`,
                        inline: false
                    },
                    {
                        name: "🆔 ID: ",
                        value: user.user.id,
                    },
                    {
                        name: 'Avatar link: ',
                        value: `[Pinche Aquí](${user.user.displayAvatarURL()})`
                    },
                    {
                        name: 'Dato de creacion: ',
                        value: user.user.createdAt.toLocaleDateString("es-pe"),
                        inline: false
                    },
                    {
                        name: 'Fecha de entrada al Servidor: ',
                        value: user.joinedAt.toLocaleDateString("es-pe"),
                        inline: false
                    },
                    {
                        name: 'Badges: ',
                        value:  member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tiene badges",
                        inline: false
                    },
                    {
                        name: '¿Boostea?: ',
                        value:  member.premiumSince ? '**Estoy boosteando <:EWdeUeHXkAQgJh7:772957492459339780>**' : `**No estoy boosteando**`,
                        inline: false
                    },
                      {
                    name: "Reciente Actividad: ",// Nombre - Titulo - Caso 1
                    value: status,// Acá se obtiene el estado del "user" con los casos ya dichos y explicado anteriormente.
                    inline: true// En linea: SI
                },
                    {
                        name: 'Roles del usuario: ',
                        value: user.roles.cache.map(role => role.toString()).join(""),
                        inline: false
                    },
                    {
                        name: 'Warns: ',
                        value: `${count}`,
                        inline: false
                    },
                    {
                        name: '__Estado Perzonalizado__: ',
                        value: `${titu}`,
                        inline: false
                    },
                )
             message.channel.send(embed)
        }
        module.exports.help = {
            name: "userinfo"
          }
    