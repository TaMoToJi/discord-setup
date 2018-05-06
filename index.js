const yt = require('ytdl-core');
const hastebin = require('hastebin-gen');
const pms = require('parse-ms');
const info = require('systeminformation');
const urban = require("urban");
const sm = require('string-similarity');
const randomPuppy = require('random-puppy');
const request = require("request");
const db = require('quick.db');
const figlet = require('figlet');
const economy = require('discord-eco');
const ms = require("ms");
const weather = require('weather-js');
const snek = require('snekfetch');
const encode = require('strict-uri-encode');
const superagent = require("superagent");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

const prefix = '//'; // Commands Prefix
const hook = new Discord.WebhookClient('442566542790492170', '2Bt_y8jugFMVk6nWlbzkW2HrwqMLet5PokbYkLBgESA5abjiQ6p9fIaUry0_NQW6rsW7');

hook.send('📡 林坓龙 | LinJingLOng Restating Successfully..');

function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Running on ${client.guilds.size} Servers`, `Config.json`,
         `CommandsFix` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on('ready', () => { // Ready Event
  console.log(`Bot is Online | on ${client.guilds.size} `);
});

client.on("message", async message => {

  if(message.author.bot) return;
 
       if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Wait 20 Second Before Getting Typing This Again.** - " + message.author);
    } else {
   if(message.content.indexOf(config.prefix) !== 0) return;
   let mutedrole = message.guild.roles.find("name", "KE-Muted");

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
  if(command === "meme") {
   if(message.author.bot) return;
   if(message.channel.type !=="text") return;
  
   randomPuppy('memes')
  .then(url => {
      const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setImage(url)
        .setColor('RANDOM')
        message.channel.send({ embed });
  })
}

       talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 8000);
    }

});

client.login(config.token); // My token is hidden
