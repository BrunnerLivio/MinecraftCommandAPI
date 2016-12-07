import { EntityTag, IEntityTag } from '../';

interface IMobTag extends IEntityTag {
    /**
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}

class MobTag extends EntityTag implements IMobTag {
    private attackTime: Number;
    public set AttackTime(value: Number) {
        this.attackTime = value;
    }
}

export { MobTag, IMobTag };