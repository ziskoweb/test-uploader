const { EmbedBuilder } = require('discord.js')
const zisko = require('../../structures/client/index')

module.exports = {
    name: "support",
    aliases: ["zisko"],
    description: {
        fr: "Invite sur le support du bot !",
        en: "Invite to the bot support!"
    },
    /**
     * 
     * @param {zisko} client 
     * @param {zisko} message 
     * @param {zisko} args 
     * @returns 
     */
    run: async (client, message, args) => {

        await message.channel.send({
            embeds: [new EmbedBuilder().setColor(client.color).setDescription(`[Clique ici pour rejoindre le support zisko Bots](${client.support})`)]
        })
    }
}