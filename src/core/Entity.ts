import { IEntity, IEntityTag, EntityTag } from './';
abstract class Entity implements IEntity {
    private name: String;
    private entityTag: IEntityTag;
    constructor(name: string) {
        this.name = name;
        this.entityTag = new EntityTag();
    }
    /**
     * The name of the entity
     */
    public get Name(): String {
        return this.name;
    }
    /**
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IEntityTag {
        return this.entityTag;
    }

    /**
     * The command of the entity.
     * Is a JSON object, but provided as string
     */
    public get Command(): String {
        let command = JSON.stringify(this.entityTag);
        return command != "{}" ? command : "";
    }
}

export { Entity };