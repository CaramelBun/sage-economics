const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Inside ${message.author.username}'s wallet!`)
        .addField(`Balance`, `<:sagecoin:891709800914751508> ${userBalance.amount}`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send({embeds: [embed]});
}

exports.help = {
    name: "bal",
    aliases: ["balance"],
    usage: `bal`
}
