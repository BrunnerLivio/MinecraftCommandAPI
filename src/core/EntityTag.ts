import { IEntityTag } from './';

class EntityTag implements IEntityTag {
    private uuidLeast: String;
    public set UUIDLeast(value: String) {
        this.uuidLeast = value;
    }
}

export { EntityTag };