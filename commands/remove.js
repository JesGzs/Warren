const { canModifyQueue } = require("../util/WarrenUtil");

module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Remove song from the queue",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("No hay nda en cola.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Uso: ${message.client.prefix}remove <Numero Cola>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Numero Cola>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ removida **${song[0].title}** de la cola.`);
  }
};
