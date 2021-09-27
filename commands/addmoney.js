const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return message.reply('You are not permitted to use this command!');
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Balance Given`, `<:sagecoin:891709800914751508> ${data.amount}`)
        .addField(`Total Balance`, `<:sagecoin:891709800914751508> ${data.after}`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send({embeds: [embed]});
}

exports.help = {
    name: "addmoney",
    aliases: ["addbal"],
    usage: `addmoney @user <amount>`
}
