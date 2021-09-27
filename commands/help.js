const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Commands!")
        .setURL("")
        .setDescription(`Total Commands: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send({embeds: [embed]});
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
