import { MobTag, IMobTag, MobTagData } from '../../core';
import { ZombieTagData, IZombieTagData } from './';

/**
 * @name IZombieTag
 * @description
 * The wrapper around ZombieTagData, which provides an easier
 * way to write data to it.
 */
export interface IZombieTag extends IMobTag {
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     */
    CanBreakDoors: Boolean;
}

/**
 * @name ZombieTag
 * @description
 * The wrapper around ZombieTagData, which provides an easier
 * way to write data to it.
 */
export class ZombieTag extends MobTag implements IZombieTag {
    protected data: IZombieTagData = new ZombieTagData();

    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     * @param {Boolean} value If the zombie can break doors
     */
    public set CanBreakDoors(value: Boolean) {
        this.data.CanBreakDoors = value;
    }

    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     * @returns {Boolean} If the zombie can break doors
     */
    public get CanBreakDoors(): Boolean {
        return this.data.CanBreakDoors;
    }
    /**
    * @name Data
    * @description
    * The data of the zombie, which can be converted to the JSON string, 
    * which can be processed by Minecraft.
    */
    public get Data(): IZombieTagData {
        return this.data;
    }
}
