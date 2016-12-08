import { MobTag, IMobTag, MobTagData } from '../../core';

interface IZombieTag extends IMobTag {
    CanBreakDoors: Boolean;
}

class ZombieTagData extends MobTagData implements IZombieTag {
    public CanBreakDoors: Boolean;
}
class ZombieTag extends MobTag implements IZombieTag {
    protected data: IZombieTag = new ZombieTagData();

    public set CanBreakDoors(value: Boolean) {
        this.data.CanBreakDoors = value;
    }
}

export { ZombieTag, IZombieTag };