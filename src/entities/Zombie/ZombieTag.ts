import { MobTag, IMobTag, MobTagData } from '../../core';
import { ZombieTagData, IZombieTagData } from './';

interface IZombieTag extends IMobTag {
    CanBreakDoors: Boolean;
}


class ZombieTag extends MobTag implements IZombieTag {
    protected data: IZombieTagData = new ZombieTagData();

    public set CanBreakDoors(value: Boolean) {
        this.data.CanBreakDoors = value;
    }

    public get Data(): IZombieTagData {
        return this.data;
    }
}

export { ZombieTag, IZombieTag };