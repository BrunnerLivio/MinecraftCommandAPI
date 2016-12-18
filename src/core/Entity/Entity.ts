import { IEntityTag, EntityTag, ICommand, IGenerateable } from '../';

interface IEntity extends ICommand {
    /**
     * Returns the Id of the entity
     */
    Id: String;
    /**
     * Returns the Tags of the Entity
     */
    Tag: IEntityTag;
}

class Entity implements IEntity {
    private id: String;
    protected entityTag: IEntityTag;
    constructor(name: String, entityTag?: IEntityTag) {
        this.id = name;
        this.entityTag = entityTag || new EntityTag();
    }
    /**
     * The name of the entity
     */
    public get Id(): String {
        return this.id;
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