import { IEntityTag, EntityTag, ICommand, IGenerateable } from '../';

interface IEntity extends ICommand {
    /**
     * Returns the Name of the entity
     */
    Name: String;
    /**
     * Returns the Tags of the Entity
     */
    Tag: IEntityTag;
}

abstract class Entity implements IEntity {
    private name: String;
    protected entityTag: IEntityTag;
    constructor(name: string, entityTag?: IEntityTag) {
        this.name = name;
        this.entityTag = entityTag || new EntityTag();
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
        // Replace e.g. {"CustomName": "MyName"} to {CustomName: "MyName"}
        let command = JSON.stringify(this.entityTag.Data)
            .replace(/\"([^(\")"]+)\":/g, "$1:");
        return command != "{}" ? command : "";
    }
}

export { Entity, IEntity };