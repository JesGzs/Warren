const { canModifyQueue } = require("../util/WarrenUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume of currently playing music",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("No hay nada reproduciendo.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Nesesuitas Unirte a un canal de voz primero!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 El volumen actual es: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Utilice un número para configurar el volumen.").catch(console.error);
    if (Number(args[0]) > 100 || Number(args[0]) < 0 )
      return message.reply("Utilice un número entre 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Volumen establecido en: **${args[0]}%**`).catch(console.error);
  }
};
