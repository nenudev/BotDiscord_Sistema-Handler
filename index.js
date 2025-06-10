require("dotenv").config();

const { loadFunctions, loadEvents, loadCommands } = require("./src/utils/loadHandlers.js");

const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();

(async () => { 
    loadFunctions(client);
    loadEvents(client);
    loadCommands(client);

    try {
        await client.login(process.env.token);
    } catch (error) {
        console.error("Error al iniciar sesion del bot", error);
    }
})();






