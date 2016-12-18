import { IEntityTagData, EntityTagData } from '../';

interface IMobTagData extends IEntityTagData {
    /**
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}

class MobTagData extends EntityTagData implements IMobTagData {
    public AttackTime: Number;
}

export { MobTagData, IMobTagData };