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
const fortnite = require('fortnite.js');
const Fortnite = new fortnite(process.env.FORTNITEAPI);
const platforms = ['PC', 'XBOX', 'PS4'];
const fs = require('fs');
function platform(query, fort) {
    if(query == 'PC') return fort.PC;
    else if(query == 'XBOX') return fort.XBOX;
    else if(query == 'PS4') return fort.PS4;
}
const {
    parse
} = require('fast-html-parser');
const {
    get
} = require('snekfetch');
const {
    parse: qs
} = require('querystring');
const {
    lazy: uf
} = require('unfluff');
const profanities = require('profanities');
const exec = require('child_process').exec;
const osu = require('node-osu');
const osuApi = new osu.Api(process.env.OSU);
function numberWithCommas(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
function emoji(emo) {
    delete require.cache[require.resolve(`../resources/emoji.js`)];
    let emojia = require("../resources/emoji.js");
    if (emojia[emo] === undefined) return "🅱";
    return emojia[emo];
}

let os = require('os')
let cpuStat = require("cpu-stat")
const client1 = require('nekos.life');
const neko = new client1();
const client = new Discord.Client();
const hook = new Discord.WebhookClient('442277268480589841', '7ubRtls4ZyjJweeAKAV-_s9mj28-oeFIMOP2sOxbByOVgOCDI3BaxiSaju-H4FBo5Ong');

const prefix = ("kb!");
const translate = require('google-translate-api');
const Langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];

hook.send('📡 `KhmerEmpire-Beta` Restarting Successfully..');


const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
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

  if(command === "hug") {
  const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  if (!args[0]) return message.channel.send("**Mention a user to hug.** `PREFIX hug <user>`");

 neko.getSFWHug().then(hug => {
        let hugEmbed = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}** hugs **${member.user.username}**...`)
            .setImage(hug.url)
            .setFooter('Powered by nekos.life')
            .setColor(message.guild.me.displayColor)
            .setTimestamp();
        return message.channel.send({ embed: hugEmbed });
  })
}

  if(command === "bond") {
  if(!args[0]) return message.channel.send("**Mention a user or users that you want to bond.** `PREFIX bond <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Perfect Couple <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Lit Couple <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'A littly risky but can work out! '
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
        var bondLevelResults = `♥♥♥♥♥♥🖤🖤🖤🖤`
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'No Comment'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Not even possible...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Users", `${message.author} x ${args[0]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Users", `${args[0]} x ${args[1]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("Users", `${args[0]} x ${args[1]} x ${args[2]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship);


        return message.channel.send(bondEmbed)
    }
}
  
  if(command === "plus") {
   if(!args[1]) return message.channel.send("**Enter two inputs for me to add.** `PREFIX plus 52 69`");
   if(isNaN(args[0])) return message.channel.send("**Supply a number.** `PREFIX plus 52 69`");


    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = parseInt(num1) + parseInt(num2);

   let addEmbed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .setTitle(`${args[0]} + ${args[1]} = **${result}**`);

   message.channel.send(addEmbed);
   message.react("➕");


}
  if(command === "owo") { 
     let useravatar = message.author.avatarURL;
     let helpembed = new Discord.RichEmbed()
    .setAuthor("KhmerEmpire' !", "https://cdn.discordapp.com/avatars/438304216893620240/56e6af0be67496ad591a1eba34075fc5.png?size=1024")
    .setDescription("This bot make for test code for KhmerEmpire not publice bot for use xD")
    .setColor('RANDOM')
    .setTitle("Bot-Commands :")
    .addField('» Botverion :', "Check Bot Verion ")
    .addField('» Hug :', "hug @user ")
    .addField('» Story :', "story time ")
    .addField('» Wave :', "wave ")
    .addField('» Bond :', "Bond @user")
    .addField('» Plus :', "plus [number] [number]")
    .addField('» Substract :', "Substract [number] [number] ")
    .addField('» Multiply :', "Multiply [number] [number] ")
    .addField('» Addrole :', "addrole @user @roles")
    .addField('» Removerole :', "removerole @user @roles")
    .addField('» Avatar :', "avatar @user | avatar @mention")
    .addField('» Ping :', "check your ping")
    .addField('» Search "', "Search Google")
    .addField('» Botspec', "BOTSPEC")
    .setThumbnail(useravatar)

     message.channel.send(helpembed);
     message.react("✅");
  }

  if(command === "substract") {
   if(!args[1]) return message.channel.send("**Enter two inputs for me to subtract.** PREFIX subtract 52 69");
   if(isNaN(args[0])) return message.channel.send("Supply a number! `PREFIX subtract 52 69`");

    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = parseInt(num1) - parseInt(num2);

   let minusEmbed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .setTitle(`${args[0]} - ${args[1]} = **${result}**`);

   message.channel.send(minusEmbed);
   message.react("➖");

}

  if(command === "multiply") {
   if(!args[1]) return message.channel.send("**Enter two inputs for me to multiply.** `PREFIX X 52 69`");
   if(isNaN(args[0])) return message.channel.send("**Supply a number.** `PREFIX X 52 69`");

    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = parseInt(num1) * parseInt(num2);

   let minusEmbed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .setTitle(`${args[0]} X ${args[1]} = **${result}**`);

   message.channel.send(minusEmbed);
   message.react("✖");

}

  if(command === "addrole") {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You don't have premmsions to do that!**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message.channel.send('**Mention a user, and type a role to give to the user.** `ium addrole <user> <role>`')
  if(!rMember) return message.channel.send("**User not found.** `PREFIX addrole <user> <role>`");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**Specify a role!** `PREFIX addrole <user> <role>`");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**Role not found.** `PREFIX addrole <user> <role>`");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already has that role.");
  await(rMember.addRole(gRole.id));

  message.channel.send(`**${rMember}** has the role **${gRole.name}** now!`)
  message.delete(800);
}
  
  if(command === "removerole") {
  if(!message.member.hasPermissions("MANAGE_ROLES")) return message.reply("You do not have permission to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("User not found.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role not found.");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn't have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`**${rMember} deos not have the role, ${gRole.name} anymore!**`)

  message.delete();

}

  if(command === "avatar") {
    let msg = await message.channel.send("Generating avatar...");
    let mentionedUser = message.mentions.users.first() || message.author;

    let avatarEmbed = new Discord.RichEmbed()
    .setImage(mentionedUser.displayAvatarURL)
    .setColor(`RANDOM`)
    .setTitle(`Avatar`)
    .setDescription("[Avatar Link]("+mentionedUser.displayAvatarURL+")")
    .setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(avatarEmbed)
    msg.delete();
}

  if(command === "hastebin") {
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0xFFF000)
      .setTitle(message.author.tag)
      .setURL(hastLink)
      .addField('» LINK : ', `${hastLink}`)
       message.delete(600)
       message.channel.send({embed: hastEmb})
  }).catch(console.error);  
}

  if(command === "search") {
    const time = Date.now();
    const term = args.join(' ');
    const searchurl = 'http://google.com/search?safe=active&gl=uk&hl=en&q=' + encodeURIComponent(term);
    const searchmessage = await message.channel.send('Searching For 🔍 ' + term);
    const body = await get(searchurl);
    const $ = new parse(body.text);
    let badwords = args.join('porn', 'pornhub', 'big tits', 'black dick', 'black cock', 'pussy', 'hentai', 'nsfw', 'ecchi', 'xnxx', 'fuck', 'penis', 'Porn', 'NSFW', 'dick', 'SHIT', 'shit', 'dick');
    if (!badwords) return message.author.send(":underage: This is Not an NSFW Channel :underage:");

    const result = (await Promise.all(
        $.querySelectorAll('.r')
        .filter(e => e.childNodes[0].tagName === 'a' && e.childNodes[0].attributes.href)
        .filter(e => e.childNodes[0].attributes.href.replace('/url?', '').indexOf('/search?') === -1)
        .slice(0, 5)
        .map(async (e) => {
            let url = e.childNodes[0].attributes.href.replace('/url?', '');
            if (url.startsWith('/')) url = 'http://google.com' + url;
            else url = qs(url).q || url;

            const body = await get(url);
            const details = uf(body.text);
            const obj = {
                url,
                snippet: () => {
                    const x = (details.description() || '').substring(0, 240);
                    const y = (details.text() || '').substring(0, 240) + '...';
                    return y.includes(x) ? y : x + '\n' + y;
                },
                image: () => details.image()
            };
            try {
                obj.title = new parse(body.text).querySelector('head').childNodes.find(e => e.tagName === 'title').childNodes[0].text;
            } catch (e) {
                obj.title = details.title() || 'No title found';
            }
            return obj;
        })
    ));
    if (!result.length) return searchmessage.edit(`${lang.noRslt}` + term);
    const first = result.shift();
    const vanityurl_1 = /^https?:\/\/[\w\.\-_]+(?::\d+|\.\w*)(?:\/|$)/g.exec(first.url);
    const vanityurl = vanityurl_1 && vanityurl_1[0] ? vanityurl_1[0] : first.url;
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Results for "${term}"`, 'https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAADwkE/KyrKDjjeV1o/photo.jpg', searchurl)
        .setTitle(`${first.title.substring(0, 200)} - ${vanityurl.substring(0, 50) + (vanityurl.length > 50 ? '...' : '')}`)
        .setURL(first.url);
    try {
        embed.setThumbnail(first.image().replace(/^\.*\/(.*)/, `${first.url}$1`));
    } catch (e) {
        embed.thumbnail = undefined;
        void e;
    }
    embed.setDescription(first.snippet())
        .setTimestamp()
        .setFooter(Date.now() - time + ' ms');
    const embeds = result.reduce((acc, r) => {
        const vu_1 = /^https?:\/\/[\w\.\-_]+(?::\d+|\.\w*)(?:\/|$)/g.exec(r.url);
        const vu = vu_1 && vu_1[0] ? vu_1[0] : r.url;
        const u = r.url.substring(0, 200) + (r.url.length > 200 ? '...' : ''); //203
        const text = `${r.title.substring(0, 200) + (r.title.length > 200 ? '...' : '')}\n[${u}](${u.endsWith('...') ? vu.substring(0, 300) + (vu.length > 300 ? '...' : '') : u})`;
        if (acc[acc.length - 1].length + text.length < 1000) acc[acc.length - 1] += `${text}\n`;
        else acc[acc.length] = text;
        return acc;
    }, ['']);
    for (const [i, e] of embeds.entries()) {
        embed.addField(i === 0 ? 'Top Results' : '\u200b', e);
    }
    searchmessage.edit({
        embed
    });
}

  if(command === "ascii") {
  message.delete(5000);
  message.react("✅");
  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => msg.delete({timeout: 10000})); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};

       talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 8000);
    }

});


client.login(config.token);
           
