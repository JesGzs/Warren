  
const db = require('quick.db');
const PREFIX = "w."

module.exports.run = async (client, message, args) => {

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**No tienes suficientes permisos para utilzar este comando! - [ADMINISTRATOR]!**");

        if (!args[0]) return message.channel.send("**Por favor menciona un canal para establecerlo como verificacion!**");

        if (!args[1]) return message.channel.send("**Ingrese un rol que se agregará después de que se verifique al usuario!**");

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args[0].toLocaleLowerCase());
        if (!channel || channel.type !== 'text') return message.channel.send("**Ingrese un canal válido!**");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args[1].toLocaleLowerCase());
        if (!role) return message.channel.send("**Ingresa un rol valido!**");

        let verifiedchannel = channel;

        try {
            let a = await db.fetch(`verificationchannel_${message.guild.id}`);
            let b = await db.fetch(`verificationrole_${message.guild.id}`);

            if (channel.id === a && role.id === b) {
                return message.channel.send('**Este canal ya está configurado como canal de verificación!**');
            } else if (channel.id === a && role.id === b) {
                return message.channel.send("**¡Este rol ya está configurado como rol de verificación!**");
            }
            else {
                message.guild.channels.cache.forEach(channel => {
                    if (channel.type === 'category' && channel.id === verifiedchannel.id) return;
                    let r = channel.permissionOverwrites.get(role.id);
                    if (!r) return;
                    if (r.deny.has("VIEW_CHANNEL") || r.deny.has("SEND_MESSAGES")) return;

                    channel.createOverwrite(message.guild.id, {
                        VIEW_CHANNEL: false
                    });

                    channel.updateOverwrite(role, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true
                    });
                });

                verifiedchannel.updateOverwrite(role, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send(`**Bienvenido ${message.guild.name}!\nPara obtener verificado usa - \`${prefix}verify\`**`);
                db.set(`verificationchannel_${message.guild.id}`, channel.id);
                db.set(`verificationrole_${message.guild.id}`, role.id);

                return message.channel.send(`**El canal y la función de verificación se han establecido con éxito en \`${channel.name}\`!**`);
            };
        } catch {
            return message.channel.send("**Error - `Permisos faltantes o el canal no es un canal de texto!`**");
        };
    }
module.exports.help = {
    name: "setverification"
  }