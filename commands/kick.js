const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!'); // Checks permission
  let member = message.mentions.members.first() || message.guild.members.get(args[0]); // Member Mention
  if (!member) return message.channel.send('Please mention a member to kick!'); // If no member is mentioned
  if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal than you!'); // Checks if the member has higher role than you
  
  let reason = args.slice(1).join(' '); // Kick reason
  
  await member.kick(reason) // Kicks the member.
  .catch(error => message.channel.send(`Sorry I couldn't kick, Error: ${error}`));
  
  let kickEmbed = new Discord.RichEmbed() // Kick embed
  .setTitle('Kicked!')
  .setDescription(`${member.user.tag} has been kicked for ${reason}`)
  message.channel.send(kickEmbed); // Sends the Kick Embed in the channel.
};
