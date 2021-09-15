const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    let gifs = ["https://i.imgur.com/azBHEcH.jpg", 
    "https://i.imgur.com/azBHEcH.jpg", 
    "https://www.vozenred.com/assets/images/notas/267067ol.JPG",
    "https://i.pinimg.com/736x/32/52/75/3252757ec69e84f00cb03063abd12dab.jpg", 
    "https://pbs.twimg.com/media/EG4IZH1XUAA0E7E.jpg",
    "https://media.abcdiario.com.ar/p/d44b404c87f6327284d4e52c1b0bd394/adjuntos/285/imagenes/000/303/0000303939/lana-rhoades.jpg",
    "https://www.famedstar.com/wp-content/uploads/2019/09/Lana-Rhoades.jpg",
    "https://www.nsfnews.com/thumb/22/2/b/7/2b7edfb5a6ba18ff9978214dc71208af.jpg",
    "https://www.enelradar.com/__export/1602872582647/sites/elimparcial/img/2020/10/16/lanarhoades_73089511_117657639658092_4003529751312345367_n.jpg_423682103.jpg"
];


let cap = gifs[Math.floor(gifs.length * Math.random())];


            const helpembed = new Discord.MessageEmbed()
                .setColor(0xC60303)
                .setAuthor(message.author.username)
                .setFooter("©️Warren BOT")
                .setImage(cap)
                .setTitle("Aqui esta tu novia  👇🏼 :fire: ")
            message.channel.send(helpembed);
            message.react('🔥');
}

module.exports.help = {
    name: "novia"
  }