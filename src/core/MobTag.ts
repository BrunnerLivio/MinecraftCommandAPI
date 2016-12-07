import { IMobTag } from './';
import { EntityTag } from './EntityTag';

class MobTag extends EntityTag implements IMobTag {
    private attackTime: Number;
    public set AttackTime(value: Number) {
        this.attackTime = value;
    }
}

export { MobTag };