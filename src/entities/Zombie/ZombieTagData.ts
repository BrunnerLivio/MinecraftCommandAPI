import { MobTag, IMobTag, MobTagData } from '../../core';

interface IZombieTagData extends MobTagData {
    /**
     * 
     */
    CanBreakDoors: Boolean;
}

class ZombieTagData extends MobTagData implements IZombieTagData {
    public CanBreakDoors: Boolean;
}

export { IZombieTagData, ZombieTagData }