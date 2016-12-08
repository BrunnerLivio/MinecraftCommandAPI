import { Mob, IMob } from '../../core';
import { ZombieTag, IZombieTag } from './';

interface IZombie extends IMob {

}

class Zombie extends Mob implements IZombie {
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