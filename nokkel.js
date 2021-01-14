const Discord = require("discord.js");
const client = new Discord.Client();//gweep creative
const { Client, Util } = require("discord.js");
const fs = require("fs");//gweep creative
require("./util/eventLoader")(client);//gweep creative
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "BuğraCode | Youtube Channel");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
//gweep creative
const log = message => {
  console.log(`${message}`);
};
//gweep creative
client.ayarlar = { 
"token": "", // token
"prefix": "st!", // prefix
"sahip": "775356233293103144",// sahip
}
//gweep creative
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//gweep creative
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);//gweep creative
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//gweep creative
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);//gweep creative
    }
  });//gweep creative
};//gweep creative

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  return permlvl;
};//gweep creative

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);
const moment = require('moment');
moment.locale('tr');//gweep creative
const { S_IFREG } = require("constants");
const data = require('quick.db');
const logs = require('discord-logs');
logs(client);


client.on('ready', async () => {
client.user.setStatus('online');
console.log(`${client.user.username} ismiyle bağlandım.`);
})
//gweep creative
client.on('message', async message => {
if(message.channel.type !== 'text') return;
const datas = await data.fetch(`tag.${message.guild.id}`);
if(message.content.toLowerCase().toString().includes('tag')) {
if(datas) return message.channel.send('`'+datas+'`');
};
});





client.on('message', async message => {
  if(message.channel.type !== 'text') return;
const chimped = await data.fetch(`chimped.${message.guild.id}`);
if(!chimped) return;
let command = chimped.find(a => a.command === message.content.toLocaleLowerCase());
if(command) {
message.channel.send(`${message.author} ${command.respond}`);
};
});


client.on("guildCreate", guild => {
  let log = client.channels.get("780107973246582802");
  const embed = new Discord.RichEmbed()
    .setAuthor("Yeni bir sunucuya eklendim!")
    .setThumbnail(
      guild.iconURL ||
        "https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif"
    )
    .setColor("GREEN")
         .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.size}\`\nKanal Sayısı: \`${guild.channels.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.get("780107973246582802");
  const embed = new Discord.RichEmbed()
    .setAuthor("Bir sunucudan atıldım -_-")
    .setThumbnail(
      guild.iconURL ||
        "https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif"
    )
    .setColor("RED")
       .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.size}\`\nKanal Sayısı: \`${guild.channels.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
 

//------------------Değişen Oynuyor---------------------------\\

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Servers Template Bot',
            type: "STREAMING",
            url: "https://discord.com/oauth2/authorize?client_id=780091448711184394&scope=bot&permissions=2080907455"
        }
    });
});







client.login(client.ayarlar.token);
