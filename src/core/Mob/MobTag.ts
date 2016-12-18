import { EntityTag, IEntityTag, EntityTagData, MobTagData, IMobTagData } from '../';

interface IMobTag extends IEntityTag {
    /**
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}


class MobTag extends EntityTag implements IMobTag {
    protected data: IMobTagData = new MobTagData();

    public set AttackTime(value: Number) {
        this.data.AttackTime = value;
    }
    public get Data(): IMobTagData {
        return this.data;
    }
}

export { MobTag, IMobTag };