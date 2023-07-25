type ColorsType = {
    blurple: number;
    red: number;
    green: number;
    white: number;
};

export interface ConfigType {
    boosterDMCooldown?: number;
    aiReactionTimesCalled?: number;
    aiReactionChannels?: string[];
    openaiApiKey?: string;
    guildId: string;
    ownerId: string;
    devGuildId: string;
    mainGuildId: string;
    environment: string;
    token: string;
    clientId: string;
    colors: ColorsType;
    developerRoleId: string;
}
