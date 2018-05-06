const gifSearch = require("gif-search");
const figlet = require('figlet');
const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "l!";

const config = require("./config.json");
const talkedRecently = new Set();
const responses = [
   'Alt is Coming Soon',
   'https://discord.gg/7mS9GEY',
   'Support My Server And Get Minecraft Alt',
   '500x Minecraft Account Unbanned Everywhere » From Minecraft.net',
   'Invite 30 People For Bot !'
]


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Free 500alts`);
});

client.on("message", async message => {
  if (talkedRecently.has(message.author.id)) {
  message.channel.send("**Wait 23\h Before Getting Typing This Again.** - " + message.author);
    } else {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "getalt") {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
   message.author.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
   message.channel.send(`📱 **Please Check Your DM** :postbox: `);
   message.delete(1000)
   message.react("📌")
} 

  if(command === "gif") {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

    if (!args[0]) return message.channel.send("`"+PREFIX+"gif <gname>`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.author.send(embed);
    });

    message.channel.send(`<@${message.author.id}> **check your dm!** :postbox:`);

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
  
  if(command === "ping") {
     const newemb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`Ping | ${Date.now() - message.createdTimestamp} ms`)
    message.channel.send({embed: newemb})
    message.react("✅")
}
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
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

  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");  
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

       talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 99999);
    }

});

client.login(config.token);
