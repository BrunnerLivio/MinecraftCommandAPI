import { ICommand } from '../../core';
import { Achievement, AchievementCommandCommand } from './';
/**
 * @name IAchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 * 
 */
export interface IAchievementCommandFrom {
    /**
     * @name To
     * @description
     * Registers the given name to the command
     * @param {String} player Adds the given name to the command. Can also be @a or @p
     * @returns {ICommand} The final command, which can be generated.
     */
    From(player: String): ICommand
}

/**
 * @name AchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 */
export class AchievementCommandFrom implements IAchievementCommandFrom {
    private achievement: Achievement;
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to take from a player 
     */
    constructor(achievement: Achievement) {
        this.achievement = achievement;
    }

    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to take the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    public From(player: String): ICommand {
        return new AchievementCommandCommand(false, this.achievement, player);
    }
}
