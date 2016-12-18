import { Entity, IMobTag, MobTag, IEntity, IEntityTag } from '../';

interface IMob extends IEntity {
}

class Mob extends Entity implements IMob {
    /**
     * @param {String} id The id of the entity
     */
    constructor(id: String, entityTag?: IEntityTag) {
        super(id, entityTag || new MobTag());
    }
    /**
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IMobTag {
        return this.entityTag as MobTag;
    }

}

export { Mob, IMob };