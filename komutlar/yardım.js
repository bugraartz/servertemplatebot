const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/779492057437306940/780111155104448572/Serverv2.gif', 'https://cdn.discordapp.com/attachments/779492057437306940/780111155104448572/Serverv2.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Servers Template Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken Botun Özel Rolünü rolünü en yukarıda tutunuz.**
**
🐝 \`${client.ayarlar.prefix}sunucu-tema\` Menüsün de neler var?

> Public, Nitro, Oyun Gibi Sunucların Şablonları


🦋 \`${client.ayarlar.prefix}sunucu-kur\` Menüsün de neler var?

> Sunucu Şablonları j4j,nitro vb.

🔥 \`${client.ayarlar.prefix}davet\` Menüsün de neler var?

> Botun Davet Linki
> Destek Sunucumuzun Davet Linki




💐 Youtube Destek için [KANAL](https://www.youtube.com/channel/UCfgDB4E-_DMf6LG0gd5rswg?view_as=subscriber) :)
**`).setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};