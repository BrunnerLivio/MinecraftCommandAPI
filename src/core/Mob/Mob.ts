import { Entity, IMobTag, MobTag, IEntity } from '../';

interface IMob extends IEntity {

}

abstract class Mob extends Entity implements IMob {
    private mobTag: IMobTag;
    constructor(name: string) {
        super(name);
        this.mobTag = new MobTag();
    }
    /**
     * Tags which modify the mob with your given values.  
     */
    public get Tag(): IMobTag {
        return this.mobTag;
    }

    /**
     * The command of the mob.
     * Is a JSON object, but provided as string
     */
    public get Command(): String {
        let command = JSON.stringify(this.mobTag);
        return command != "{}" ? command : "";
    }
}

export { Mob, IMob };