import { MobTag, IMobTag, MobTagData } from '../../core';

/**
 * @name IMobTagData
 * @description
 * This interface represents the real Tags, which get converted to JSON String, when 
 * the command is getting generated.
 */
interface IZombieTagData extends MobTagData {
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     */
    CanBreakDoors: Boolean;
}

/**
 * @name ZombieTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when 
 * the command is getting generated.
 */
class ZombieTagData extends MobTagData implements IZombieTagData {
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     */
    public CanBreakDoors: Boolean;
}

export { IZombieTagData, ZombieTagData }