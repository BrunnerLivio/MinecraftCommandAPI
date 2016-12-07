import { IEntity, IEntityTag, EntityTag } from './';
abstract class Entity implements IEntity {
    private name: String;
    private entityTag: IEntityTag;
    constructor(name: string) {
        this.name = name;
        this.entityTag = new EntityTag();
    }
    public get Name(): String {
        return this.name;
    }

    public get Tag(): IEntityTag {
        return this.entityTag;
    }

    public get Command(): String {
        let command = JSON.stringify(this.entityTag);
        return command != "{}" ? command : "";
    }
}

export { Entity };