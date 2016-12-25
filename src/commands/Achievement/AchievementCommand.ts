import { ICommand } from '../../core';
import { Achievement } from './';
/**
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
interface IAchievementCommandTo {
    /**
     * @name To
     * @description
     * Registers the given name to the command
     * @param {String} player Adds the given name to the command. Can also be @a or @p
     * @returns {ICommand} The final command, which can be generated.
     */
    To(player: String): ICommand
}
/**
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 * 
 */
interface IAchievementCommandFrom {
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
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
interface IAchievementCommand {
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    Give(name: Achievement): IAchievementCommandTo;
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    Take(name: Achievement): IAchievementCommandFrom;
}
/**
 * @name AchievementCommandCommand
 * @description
 * Generates the final Achievment Command.
 */
class AchievementCommandCommand implements ICommand {
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
    private GetAchievementName(achievement: Achievement): string {
        return Object.keys(Achievement)
            .filter(a => Achievement[a] == achievement)
            .map(a => a)[0];
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

/**
 * @name AchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
class AchievementCommandTo implements IAchievementCommandTo {
    private isGiven: Boolean;
    private achievement: Achievement;
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to give to a player 
     */
    constructor(achievement: Achievement) {
        this.achievement = achievement;
    }
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to give the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    public To(player: String): ICommand {
        return new AchievementCommandCommand(true, this.achievement, player);
    }
}

/**
 * @name AchievementCommandFrom
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Take' on IAchievementCommand
 */
class AchievementCommandFrom implements IAchievementCommandFrom {
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

/**
 * @name AchievementCommand
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
class AchievementCommand implements IAchievementCommand {
    constructor() { }

    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    public Give(name: Achievement): IAchievementCommandTo {
        return new AchievementCommandTo(name);
    }

    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    public Take(name: Achievement): IAchievementCommandFrom {
        return new AchievementCommandFrom(name);
    }

}
export { AchievementCommand, IAchievementCommand };