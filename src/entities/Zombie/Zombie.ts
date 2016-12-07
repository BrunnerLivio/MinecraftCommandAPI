import { Mob } from '../../core';
import { ZombieTag, IZombieTag } from './';

class Zombie extends Mob {
    private zombieTag: IZombieTag;

    /**
     * Zombies are undead hostile mobs.
     */
    constructor() {
        super('Zombie');
        this.zombieTag = new ZombieTag();
    }

    /**
     * Tags which modify the zombie with your given values. 
     */
    public get Tag(): IZombieTag {
        return this.zombieTag;
    }

    /**
     * The command of the zombie;
     * Is a JSON object, but provided as string
     */
    public get Command(): String {
        let command = JSON.stringify(this.zombieTag);
        return command != '{}' ? command : '';
    }
}

export { Zombie };