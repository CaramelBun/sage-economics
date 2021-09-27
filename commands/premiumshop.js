exports.execute = async (client, message, args) => {

    const DJrole = '887695070281740298'
    const {
        MessageActionRow,
        MessageButton
    } = require('discord.js');
    const { MessageEmbed } = require('discord.js');


    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('yesbuttonDJ')
					.setLabel('Yes')
					.setStyle('SUCCESS'),

                new MessageButton()
                    .setCustomId('nobuttonDJ')
                    .setLabel('No')
                    .setStyle('DANGER'),

                
            );

            

    const DJprice = 100000

    const shopembed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

    if (args[0] !== 'buy' || '') return message.channel.send({embeds: [shopembed]})
    else if (args[1] !== 'DJ') return message.channel.send({embeds: [shopembed]})

    if (args[1] == 'DJ') {
        if (message.member.roles.cache.has('887695070281740298')) {
            return message.channel.send("You currently have the DJ role! Please wait till it expires before buying again.");
        } else {
            let userBalance = client.eco.fetchMoney(message.author.id);
            if (userBalance.amount < 1) return message.channel.send("You are too bloody poor :v.");
            let isBalanceEnough = (userBalance.amount >= DJprice);
            let balanceneededDJ = (DJprice) - (userBalance.amount)
            if (!isBalanceEnough) return message.reply("Your current balance is insufficient. You still need <:sagecoin:891709800914751508> "+(balanceneededDJ)+" to buy this role."); 

        }

        const pendingembed = new MessageEmbed()
        .setColor('BLURPLE')
	    .setTitle('Pending Confirmation!')
	    .setDescription("Are you sure you want to buy the DJ role for <:sagecoin:891709800914751508> "+(DJprice)+"?")
	    .setTimestamp()
	    .setFooter(`Note : Once you purchase it , refunds won't be made!`);

        const successDJ = new MessageEmbed()
        .setColor('#66ff00')
	    .setTitle('Payment Success!')
	    .setDescription("You have successfully purchased the DJ role for 24 hours!")
	    .setTimestamp()
	    .setFooter(`Note : Once you purchase it , refunds won't be made!`);

        const failedDJ = new MessageEmbed()
        .setColor('#FF160C')
	    .setTitle('Payment Failed!')
	    .setDescription("No payment has been made as you declined the confirmation!")
	    .setTimestamp()
	    .setFooter(`Note : Once you purchase it , refunds won't be made!`);

        client.on('interactionCreate', async interaction => {
            if (interaction.isButton()) {
                if(interaction.customId === 'yesbuttonDJ') {
                    let buy = client.eco.removeMoney(message.author.id, 100000);
                    message.member.roles.add(DJrole);
                        setTimeout(() => message.member.roles.remove(DJrole), 86400000);
                    console.log(`${message.author.username} has purchased the DJ role for 24 hours!`)
                    row.components[0].setDisabled(true) //disables but_1
                    row.components[1].setDisabled(true) //disables but_2
                    
                    try {
                        await interaction.update({components: [row], embeds: [successDJ]});
                    } catch (error) {
                        console.log(error)
                    }

                }
            }
            
            if (interaction.isButton()) {
                if(interaction.customId === 'nobuttonDJ') {
                    row.components[0].setDisabled(true) //disables but_1
                    row.components[1].setDisabled(true) //disables but_2
                    
                    try {
                        await interaction.update({components: [row], embeds: [failedDJ]});
                    } catch (error) {
                        console.log(error)
                    }

                }
            }
        });
        message.channel.send({
            content: `<@${message.author.id}>`,
            embeds: [pendingembed],
            components: [row]
        })
    }
    
};

exports.help = {
    name: "premiumshop",
    aliases: ['pshop'],
    usage: "premiumshop"
}
