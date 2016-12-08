import { Entity, IMobTag, MobTag, IEntity, IEntityTag } from '../';

interface IMob extends IEntity {
}

abstract class Mob extends Entity implements IMob {
    constructor(name: string, entityTag?: IEntityTag) {
        super(name, entityTag || new MobTag());
    }
    /**
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IMobTag {
        return this.entityTag as MobTag;
    }

}

export { Mob, IMob };