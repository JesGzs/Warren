const { canModifyQueue } = require("../util/WarrenUtil");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Toggle music loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("No hay nada reproduciendo.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.loop = !queue.loop;
    return queue.textChannel.send(`Loop is now ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
  }
};
