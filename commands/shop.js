const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - <:sagecoin:891709800914751508> ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("To buy an item , do s!buy <item>!")
  return message.channel.send({embeds: [embed]});
};

exports.help = {
  name: "shop",
  aliases: [],
  usage: `shop`
};
