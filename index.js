import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from "discord.js";
import {genResponse} from './gemini.js';
dotenv.config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on("clientReady", () => {
    console.log(`Bot is ready!`);
})

client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Ignore messages from bots
    if (message.channel.name !== "leo-ai") return; // Ignore messages not in the "leo-ai" channel 
    console.log(`channel: ${message.channel.name} \nMessage received: ${message.content} by ${message.author.tag}`);
    if (message.content === "ping") {
        message.reply("pong 👀");
    }
    if (message.content === "hello") {
        message.reply("Sat shri akal!");
    }
    if (message.content === "goodbye") {
        message.reply("See you later!");
    }
    if (message.content.length != 0) {
        const response = await genResponse(message.content);
        message.reply(response);
    }

});

client.login(process.env.DISCORD_BOT_TOKEN);