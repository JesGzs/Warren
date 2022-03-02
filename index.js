const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, default_prefix } = require("./config.json");
const db = require("quick.db")
const client = new Discord.Client({ ws: { intents: 32767 } })
const { MessageAttachment } = require('discord.js');
const Zeew = require("zeew");

client.commands = new Collection();
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

//////////////////////exports commands/////////////////////
const fs = require("fs");
  client.comandos = new Discord.Collection();
  
  fs.readdir("./comandos/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.lenght <= 0) {
      console.log("No encontre ningun comando");
      return;
    }
  
    jsfile.forEach((f, i) => {
      let props = require(`./comandos/${f}`);
      client.comandos.set(props.help.name, props);
    });
  });

  client.on("message", async message => {
    let PREFIX = await  db.get(`prefix_${message.guild.id}`);
    if(PREFIX === null) PREFIX = default_prefix;
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    let blacklist = await db.fetch(`blacklist_${message.author.id}`)
   
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;
  
    if (blacklist === "Blacklisted") return message.reply("Estas Blacklisteado por mal uso de comandos contacta a `Outlaw` para mas informacion!")
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.comandos.get(cmd.slice(PREFIX.length));
    if (commandfile) commandfile.run(client, message, args);
  });

////READYY//////////////////////////////////////////////////////////////////
function presencia(){
client.user.setPresence({
    status: "online",
    activity: {
      name: `w.play |🎵| Musica`,
      type: "LISTENING"
    }
  });
}
const chalk = require('chalk');
client.on('ready', () => {
console.log(`[MEMORIA] ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
console.log(chalk.bgHex('#00ff00')(`${client.user.tag} Listo!!`));
presencia();
});
////Music Comandos

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {

let PREFIX = await  db.get(`prefix_${message.guild.id}`);
if(PREFIX === null) PREFIX = default_prefix;
if (!message.content.startsWith(PREFIX) || message.author.bot) return;

client.prefix = PREFIX;

let blacklist = await db.fetch(`blacklist_${message.author.id}`)
if (blacklist === "Blacklisted") return;

  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});

////DB WELCOME////
client.on("guildMemberAdd", async (member) => {

  const { CanvasSenpai } = require("canvas-senpai")
  const canva = new CanvasSenpai();

  let wChan = db.fetch(`welcome_${member.guild.id}`)

  if (wChan == null) return;

  if (!wChan) return;

  let data = await canva.welcome(member, { link: "https://img3.wallspic.com/previews/9/3/0/4/6/164039/164039-banner_de_contraccion_de_la_galaxia-contraccion_nerviosa-banner_web-streaming_de_medios_de_comunicacion-gamer-x750.jpg" }) 

  const attach = new Discord.MessageAttachment(
    data,
    "welcome-image.png"
  );
    
  member.guild.channels.cache.get(wChan).send(
    `Bienvenid@ al server, ${member}!`,
    attach
  );   
});

////Snipe client

client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
});

client.login("TOKEN");
