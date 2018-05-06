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
const tokens = require('./config.json');
const config = require("./config.json");
const fs = require('fs');


const hook = new Discord.WebhookClient('442277268480589841', '7ubRtls4ZyjJweeAKAV-_s9mj28-oeFIMOP2sOxbByOVgOCDI3BaxiSaju-H4FBo5Ong');


hook.send('📡 `KhmerEmpire-Beta` Restarting Successfully..');

const talkedRecently = new Set();

async function getUUID (name) {
	let json = await request( { uri: `https://api.mojang.com/users/profiles/minecraft/${name}?at=${moment().format('x')}`, json: true } );
	if (!json || json.error) return undefined;
	else return json.id;
}


client.commands = new Discord.Collection();

client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`Bot Has Invite To New Guild » ${guild.name} with invite: https://discord.gg/${invite.code}`)
});

function setActivity() {
    //Variable Array for what the setGame can be set to
    var Gameinfo = [`Prefix: ${config.prefix}`, `Run on ${client.guilds.size} Servers`, `${config.prefix}help`,
         `Ping to API: ${(client.ping).toFixed(0)} Ms`, `#auto-support` // Change these to what you want, add as many or as few as you want to
    ]

    var info = Gameinfo[Math.floor(Math.random() * Gameinfo.length)]; //Random Math to set the setGame to something in the GameInfo array

    client.user.setActivity(info) // "playing Game" '...' Sets the setGame to what the info Random math picked from the GameInfo Array
    if (config.debugMode === "1") {
        console.log(`[ LOG ] set Activity set to ( ${info} )`) //Logs to console what the setGame was set as.
    }

}

setInterval(setActivity, 1000 * 60 * 2)


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
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

 
  if(command === "botversion") {
    let verEmbed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .addField("BOT Version", config.version)
    .addField("Made with", "discord.js v11.3 \nnpm v11.3.2 \nnode.js v8.10.0 and 💗");
    
    message.channel.send(verEmbed);
 }

});


client.login(config.token);           
