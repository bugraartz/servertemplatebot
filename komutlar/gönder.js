const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {

    const link = args[0];
    const açıklama = args.slice(1).join(" ") 
    if (!link.includes("https://discord.new")) return message.channel.send(new Discord.MessageEmbed().setColor('#ff0004').setTitle(`İşlem Başarısız`).setDescription(`<:basarsz:769626111386452039> ${message.author}, **Lütfen Geçerli Bir Şablon Link Belirtin!**`))
  
    const gönderildi = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .setDescription(`<a:bugra22:780322370304475167> Desteklerinizden Dolayı Teşekkür Ederiz. Uygun görülürse Bota Eklenicektir.`)
    .setColor("#2bfe0f")
    message.channel.send(gönderildi)

    const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField("Şablonu Gönderen \n", message.author)
    .addField(`Gönderilen Şablon\n`, `${link}`)
    .addField(`Açıklama \n`, `${açıklama}`)
    .setFooter("Servers Template | Hazır Şablon sistemi")
    .setColor("#000000")
    client.channels.cache.get("780107973246582802").send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["g","send"],
  permLevel: 0
};
exports.help = {
  name: "gönder",
  description: "k",
  usage: "gönder"
};
   