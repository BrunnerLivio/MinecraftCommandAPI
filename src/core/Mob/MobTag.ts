import { EntityTag, IEntityTag, EntityTagData } from '../';

interface IMobTag extends IEntityTag {
    /**
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
    Data?: IMobTag;
}

class MobTagData extends EntityTagData implements IMobTag {
    public AttackTime: Number;
}

class MobTag extends EntityTag implements IMobTag {
    protected data: IMobTag = new MobTagData();

    public set AttackTime(value: Number) {
        this.data.AttackTime = value;
    }
    public get Data(): IMobTag {
        return this.data;
    }
}

export { MobTag, IMobTag, MobTagData };