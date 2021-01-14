const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('Gweep Creative Sunucu Tema Şablon Sistem')
.setDescription(`**Tüm şablonlar ${client.user.username}'a Aittir.**
İçerikler de birden fazla tema var.

\`${client.ayarlar.prefix}j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`${client.ayarlar.prefix}public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`${client.ayarlar.prefix}oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`${client.ayarlar.prefix}gif-tema\` 
**Hazır gif share sunucu teması yollar**

\`${client.ayarlar.prefix}sunucu-kur\` 
**Klasik oyun & sohbet sunucusu kurar**

\`\`\`Farklı temalar için, Kendi sunucu şablonunu \`${client.ayarlar.prefix}gönder\` Komutu ile bize iletebilirsin! \n Daha Fazla Temalar için \`${client.ayarlar.prefix}diğer-temalar\` Komutunu Kullan. \`\`\``)
.setThumbnail('https://media.discordapp.net/attachments/722476871941357979/761287159801577482/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-tema'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};