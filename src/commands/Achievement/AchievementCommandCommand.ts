import { Achievement } from './';
import { ICommand } from '../../core';

/**
 * @name IAchievementCommandCommand
 * @description
 * Generates the final Achievement Command.
 */
export interface IAchievementCommandCommand extends ICommand {

}
/**
 * @name AchievementCommandCommand
 * @description
 * Generates the final Achievement Command.
 */
export class AchievementCommandCommand implements IAchievementCommandCommand {
    private isGiven: Boolean;
    private playerName: String;
    private achievement: Achievement;
    /**
     * @description
     * Initializes the class
     * @param {Boolean} isGiven If the command should 'take' or 'give' the achievement
     * @param {Achievement} achievement The achievement to give or take
     * @param {String} playername The playername which have or delete the given achievement.
     */
    constructor(isGiven: Boolean, achievement: Achievement, playerName: String) {
        this.isGiven = isGiven;
        this.achievement = achievement;
        this.playerName = playerName;
    }
    /**
     * @name GetAchievementName
     * @description
     * Gets the name of achievement, by its value
     * @param {Achievement} achievement The achievement you want to have the name of.
     * @returns {String} The name of the achievement, of the given value
     */
    private GetAchievementName(achievement: Achievement): String {
        return Achievement[achievement];
    };
    /**
     * @name Command
     * @description
     * Generates the achievement command and returns it as string
     * @returns {String} The achievement command as string
     */
    public get Command(): String {
        let command = '/achievement ';
        if (this.isGiven) {
            command += 'give ';
        } else {
            command += 'take ';
        }
        if (this.achievement == Achievement.all) {
            command += '* ';
        } else {
            command += 'achievement.' + this.GetAchievementName(this.achievement) + ' ';
        }
        command += this.playerName;
        return command;
    }
}
