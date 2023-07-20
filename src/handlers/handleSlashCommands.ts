import {
    CacheType,
    CommandInteractionOptionResolver,
    EmbedBuilder,
} from 'discord.js';
import { client } from '..';
import {
    ModifiedChatInputCommandInteraction,
    CommandRunParams,
} from '../types';

export const handleSlashCommands = async (
    interaction: ModifiedChatInputCommandInteraction
) => {
    await interaction.deferReply({ ephemeral: true });

    const command = client.commands.get(interaction.commandName);

    if (
        command?.devOnly &&
        !interaction.member.roles.cache.has(client.config.developerRoleId)
    ) {
        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Oops! Something went wrong')
                    .setColor(client.config.colors.red)
                    .setDescription(
                        'Turns out this is a **developer only command**, and you do not seem to be my developer!'
                    ),
            ],
            ephemeral: true,
        });
        return;
    }

    if (
        command?.ownerOnly &&
        interaction.guild?.ownerId !== interaction.member.id
    ) {
        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Oops! Something went wrong')
                    .setColor(client.config.colors.red)
                    .setDescription(
                        'Apparently you need to be the owner of the server to run this command! *very prestigious, I know*'
                    ),
            ],
            ephemeral: true,
        });
        return;
    }
    const args: CommandRunParams = {
        client,
        interaction,
        options:
            interaction.options as CommandInteractionOptionResolver<CacheType>,
    };

    await command?.run(args);
};
