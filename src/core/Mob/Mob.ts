import { Entity, IMobTag, MobTag, IEntity, IEntityTag } from '../';

/**
 * @name IMob
 * @description
 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
 */
export interface IMob extends IEntity {
}

/**
 * @name Mob
 * @description
 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
 */
export class Mob extends Entity implements IMob {
    /**
     * @param {String} id The id of the entity
     */
    constructor(id: String, entityTag?: IEntityTag) {
        super(id, entityTag || new MobTag());
    }
    /**
     * @name Tag
     * @description
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IMobTag {
        return this.entityTag as MobTag;
    }

}
