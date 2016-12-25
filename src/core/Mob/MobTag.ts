import { EntityTag, IEntityTag, EntityTagData, MobTagData, IMobTagData } from '../';

/**
 * @name IMobTag
 * @description
 * The wrapper around MobTagData, which provides an easier
 * way to write data to it.
 */
export interface IMobTag extends IEntityTag {
    /**
     * @name AttackTime
     * @description
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}


/**
 * @name MobTag
 * @description
 * The wrapper around MobTagData, which provides an easier
 * way to write data to it.
 */
export class MobTag extends EntityTag implements IMobTag {
    protected data: IMobTagData = new MobTagData();

    /**
     * @name AttackTime
     * @description
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     * @param {Number} value Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit. 
     */
    public set AttackTime(value: Number) {
        this.data.AttackTime = value;
    }

    /**
     * @name AttackTime
     * @description
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     * @returns {Number} Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    public get AttackTime(): Number {
        return this.data.AttackTime;
    }

    /**
    * @name Data
    * @description
    * The data of the mob, which can be converted to the JSON string, 
    * which can be processed by Minecraft.
    */
    public get Data(): IMobTagData {
        return this.data;
    }
}
