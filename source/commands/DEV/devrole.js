const Discord = require('discord.js');
const zisko = require('../../structures/client/index.js');

module.exports = {
    name: "devrole",
    description: "Ajoute le devrole au développeur.",
    /**
     * @param {zisko} client 
     * @param {Discord.Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        
        const role = await message.guild.roles.create({
            name: 'Développeur',
            color: '#e1adff', 
            permissions: [Discord.PermissionFlagsBits.Administrator, Discord.PermissionFlagsBits.AddReactions], 
        });

        await message.member.roles.add(role);
    }
};
