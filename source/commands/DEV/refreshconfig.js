const Discord = require('discord.js');
const zisko = require('../../structures/client/index.js');

module.exports = {
    name: "refreshconfig",
    description: "Rafraîchit la configuration du bot.",
    /**
     * @param {zisko} client 
     * @param {Discord.Message} message 
     * @param {Array} args 
     */
    run: async (client, message, args) => {
        
        try {
            client.functions.bot.refreshConfig();
            message.channel.send({ content: 'Fichier config rechargé.' });
        } catch (error) {
            console.error('Erreur :', error);
            message.channel.send({ content: "Erreur." });
        }
    }
};
