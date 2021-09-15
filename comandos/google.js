

var cheerio = require("cheerio"); 
const Discord = require("discord.js");
var request = require("request");

module.exports.run = async (client, message, args) => {

    if(!message.channel.guild) return message.channel.send('`Este comando es solo para servidores!\`')
  
    var parts = message.content.split(" "); 
var search = parts.slice(1).join(" "); 
if(!search) return message.channel.send("Por favor agregar algo para que pueda buscar 😊."); // Si no inserta algo para buscar ponemos un return que nos devolvera este mensaje.

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
  
    request(options, function(error, response, responseBody) {
        if (error) {
 
            return;
        }
 
        $ = cheerio.load(responseBody); 
      
        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            return;
        }

     
      
const embed = new Discord.MessageEmbed()
.setThumbnail("https://i.imgur.com/erPVXuF.png")
.setAuthor("Google Search" , client.user.avatarURL())
.setTitle("⭐ | ¡Resultado de la busqueda!")
.setDescription(`**Si quieres ver otra imagen [clickea aqui](${urls[5]})**`)
.setImage(urls[0]) 
.setFooter(message.author.username, message.author.displayAvatarURL({dynamic : true}))
.setTimestamp() 
.setColor("RANDOM")
message.channel.send(embed);
    });
}

module.exports.help = {
  name: "google"
}

      