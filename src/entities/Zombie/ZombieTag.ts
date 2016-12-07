import { MobTag, IMobTag } from '../../core';

interface IZombieTag extends IMobTag {
    CanBreakDoors: boolean;
}

class ZombieTag extends MobTag implements IZombieTag {
    private canBreakDoors: boolean;
    public set CanBreakDoors(value: boolean) {
        this.canBreakDoors = value;
    }
}

export { ZombieTag, IZombieTag };