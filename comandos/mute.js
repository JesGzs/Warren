const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => { 

        try {
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**No tienes permiso para silenciar a alguien! - [MANAGE_GUILD]**");

            if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send("**No tengo permiso para silenciar a alguien! - [MANAGE_GUILD]**")
            if (!args[0]) return message.channel.send("**Por favor ingrese una usuario para silenciar!**");

            var mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!mutee) return message.channel.send("**Por favor ingrese una usuario para silenciar!**");

            if (mutee === message.member) return message.channel.send("**No puedes silenciarte!**")
            if (mutee.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**No se puede silenciar a esta usuario!**')

            let reason = args.slice(1).join(" ");
            if (mutee.user.bot) return message.channel.send("**No puedo mutear bots!**");
            const userRoles = mutee.roles.cache
                .filter(r => r.id !== message.guild.id)
                .map(r => r.id)

            let muterole;
            let dbmute = await db.fetch(`muterole_${message.guild.id}`);
            let muteerole = message.guild.roles.cache.find(r => r.name === "muted")

            if (!message.guild.roles.cache.has(dbmute)) {
                muterole = muteerole
            } else {
                muterole = message.guild.roles.cache.get(dbmute)
            }

            if (!muterole) {
                try {
                    muterole = await message.guild.roles.create({
                        data: {
                            name: "muted",
                            color: "#514f48",
                            permissions: []
                        }
                    })
                    message.guild.channels.cache.forEach(async (channel) => {
                        await channel.createOverwrite(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            SPEAK: false,
                            CONNECT: false,
                        })
                    })
                } catch (e) {
                    console.log(e);
                }
            };

            if (mutee.roles.cache.has(muterole.id)) return message.channel.send("**User Is Already Muted!**")

            db.set(`muteeid_${message.guild.id}_${mutee.id}`, userRoles)
          try {
            mutee.roles.set([muterole.id]).then(() => {
                mutee.send(`**Hola, has sido silenciada ${message.guild.name} por - ${reason || "No Reason"}`).catch(() => null)
            })
            } catch {
                 mutee.roles.set([muterole.id])                               
            }
                if (reason) {
                const sembed = new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`Poniendo silencio a **${mutee.user.username}** :mute: por ${reason}`)
                message.channel.send(sembed);
                } else {
                    const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`Poniendo Silencio a **${mutee.user.username}** :mute:`)
                message.channel.send(sembed2);
                }
            
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            let embed = new MessageEmbed()
                .setColor("RED")
                .setThumbnail(mutee.user.displayAvatarURL({ dynamic: true }))
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .addField("**Moderation**", "mute")
                .addField("**Mute**", mutee.user.username)
                .addField("**Moderator**", message.author.username)
                .addField("**Rason**", `${reason || "**No Rason**"}`)
                .addField("**Fecha**", message.createdAt.toLocaleString())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch {
            return;
        }
    }

 module.exports.help = {
        name: "mute"
      } 