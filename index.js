const {Client, Collection} = require('discord.js');
const dotenv = require('dotenv');
const CommandUtil = require('./utils/handlers/CommandUtil.js');
const EventUtil = require('./utils/handlers/EventUtil.js');
const SelectUtil = require('./utils/handlers/SelectUtil.js');
dotenv.config();
const client = new Client({intents: 579});
client.commands = new Collection();
['selects'].forEach(x => client[x] = new Collection());
[CommandUtil, EventUtil, SelectUtil].forEach(handler => handler(client));
process.on('exit', code => {
  console.log(`le processus s'est arrêté avec le code ${code}!`);
});
process.on('uncaughtException', (err, origin) => {
  console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origine:${origin}`);
});
process.on('unhandledRejection', (reason, promise) => {
  console.log(`UNHANDLED_REJECTION: ${reason}\n------\n`, promise);
});
process.on('warning', (...args) => console.log(...args));
client.login(process.env.DISCORD_TOKEN);