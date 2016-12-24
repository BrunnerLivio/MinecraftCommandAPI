import { Mob, IMob } from '../../core';
import { ZombieTag, IZombieTag } from './';

/**
 * @name IZombie
 * @description
 * Zombies are common, undead hostile mobs that come in many variants.
 */
interface IZombie extends IMob {

}

/**
 * @name Zombie
 * @description
 * Zombies are common, undead hostile mobs that come in many variants.
 */
class Zombie extends Mob implements IZombie {
    /**
     * @description
     * Initializes the Zombie
     */
    constructor() {
        super('Zombie', new ZombieTag());
    }
    /**
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IZombieTag {
        return this.entityTag as ZombieTag;
    }
}

export { Zombie, IZombie };