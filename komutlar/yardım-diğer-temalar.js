const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Sunucu Şablanları;**\n\n Yardım menüsünü görmeden önce <@!${client.user.id}> 'i kullandığınız için sizlere teşekkür ederiz.\n\n \` ${client.ayarlar.prefix}bot-satış-tema \` **Bot Satış Sunucusu Şablonu Atar**.\n \` ${client.ayarlar.prefix}uptime-support-tema \` **Uptime Bot Support Sunucusu Şablonu Atar.** \n\n \` ${client.ayarlar.prefix}botlist-tema \` **Bot List Şablonu Atar** \n\n ** Şablonlara Bakmaya Devam Etmek için ➡ Emojisine Bas **`,
`**Sunucu Şablanları;**\n\n \`${client.ayarlar.prefix}j4j-tema \` **J4J Sunucu Şablonu Atar.** \n\n  \` ${client.ayarlar.prefix}site-satış-tema \` **Site Satış Sunucusu Şablonu Atar**\n\n  \` ${client.ayarlar.prefix}youtube-twitch-tema \` **Youtube/Twitch Şablonu Atar**.\n\n  \` ${client.ayarlar.prefix}zula-tema \` **Zula Klan Sunucusu Şablonu atar.** \n\n \` ${client.ayarlar.prefix}mta-tema \` **MTA Roleplay Sunucusu Şablonu atar.** \n\n \` ${client.ayarlar.prefix}atlantis-tema \` **Atlantis Sunucu Şablonu Atar.** \n\n ** Şablonlara Bakmaya Devam Etmek için ➡ Emojisine Bas**`,
`**Sunucu Şablanları;**\n\n \`${client.ayarlar.prefix}sınıf-tema \` **Sınıf Sunucu Şablonu Atar.** \n\n \` ${client.ayarlar.prefix}şablon-tema \` **Şablon Sunucusu Şablonu Atar**\n\n \` ${client.ayarlar.prefix}dil-değisen-sunucu-tema \` **Dili Değişen Sunucu Şablonu Atar**.\n\n  \` ${client.ayarlar.prefix}nivo-tema \` **Nivo TV Sunucusunun Şablununu atar** \n\n \` ${client.ayarlar.prefix}gelişmis-satış-tema \` **Gelişmiş Şablon Sunucusu Şablonu Atar.** \n\n \` ${client.ayarlar.prefix}j4j-v2-tema \` **J4J V2 Şablonu Atar.** \n\n **Şablonlara Bakmaya Devam Etmek için ➡ Emojisine Bas**`,
`**Sunucu Şablanları;**\n\n Evet Şablonlarımız Bukadardı umarım Beğenmişsindir. Bunun gibi daha fazla Sunucu Şablonları gelsin istiyorsan \`-gönder\` Komutu ile Biz Bildirmeyi unutma!! \n\n Yapımcım <@!${client.ayarlar.sahip}> e Destek Olmazk için [Youtube](https://www.youtube.com/channel/UCfgDB4E-_DMf6LG0gd5rswg?view_as=subscriber) Kanalına Abone Olmayı unutma.`,
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
.setAuthor(`Servers Template Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['diğer-temalar', 'other-templates'],
  permLevel: 0
}

exports.help = {
  name: 'diğer-temalar'
};
