import { Mob, IMob, IMobTag, MobTag } from '../../core';

/**
 * @name ElderGuardian
 * @description
 * The elder guardian is a hostile mob which only spawns underwater in ocean monuments.
 * It is a stronger variant of the guardian.
 */
export interface IElderGuardian extends IMob {

}

/**
 * @name ElderGuardian
 * @description
 * The elder guardian is a hostile mob which only spawns underwater in ocean monuments.
 * It is a stronger variant of the guardian.
 */
export class ElderGuardian extends Mob implements IElderGuardian {
    /**
     * @description
     * Initializes the Zombie
     */
	constructor() {
		super('elder_guardian', new MobTag());
	}
    /**
     * Tags which modify the entity with your given values.  
     */
	public get Tag(): IMobTag {
		return this.entityTag as MobTag;
	}
}