import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
} from 'discord.js';
import { Cheeka } from '../lib';

export interface ModifiedCommandInteraction extends CommandInteraction {
  member: GuildMember;
}

export interface RunParams {
  client: Cheeka;
  interaction: ModifiedCommandInteraction;
  options?: CommandInteractionOptionResolver;
}

export interface CommandType extends ChatInputApplicationCommandData {
  run: (options: RunParams) => Promise<void>;
}
