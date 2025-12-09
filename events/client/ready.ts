import { ActivityType } from 'discord.js';
import Logger from '../../utils/Logger';

export = {
  name: 'clientReady',
  once: true,
  async execute(client: any) {
    const guildsCount = await client.guilds.fetch();

    client.user.setPresence({ activities: [{ name: 'You', type: ActivityType.Watching }], status: 'online' });

    await client.application.commands.set(client.commands.map((cmd: any) => cmd));
    Logger.client(
      `Bot ready on ${guildsCount.size} servers\n\n--------\n${process.env.DISCORD_BOT_NAME} ©2025\n--------\nAuthor:\n-Silvus\n--------\n`,
    );
  },
};
