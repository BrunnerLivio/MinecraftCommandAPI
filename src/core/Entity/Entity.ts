import { IEntityTag, EntityTag, ICommand, IGenerateable } from '../';

/**
 * @name IEntity
 * @description
 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
 */
export interface IEntity extends ICommand {
    /**
     * @name Id
     * @description
     * Returns the Id of the entity
     */
    Id: String;
    /**
     * @name Tag
     * @description
     * Returns the Tags of the Entity
     */
    Tag: IEntityTag;
}

/**
 * @name Entity
 * @description
 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
 */
export class Entity implements IEntity {
    private id: String;
    protected entityTag: IEntityTag;
    /**
     * @description
     * Initializes the Entity
     * @param {String} name Identification of the entity, set by Minecraft
     * @param {IEntity} entityTag The tags which should be writeable
     */
    constructor(name: String, entityTag?: IEntityTag) {
        this.id = name;
        this.entityTag = entityTag || new EntityTag();
    }
    /**
     * @name Id
     * @description
     * The name of the entity
     * @returns {String} The id of the entity, set by Minecraft
     */
    public get Id(): String {
        return this.id;
    }
    /**
     * @name Tag
     * @description
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IEntityTag {
        return this.entityTag;
    }

    /**
     * @name Command
     * @description
     * The command of the entity.
     * Is a JSON object, but provided as string
     * @returns {String} The command as string.
     */
    public get Command(): String {
        // Replace e.g. {"CustomName": "MyName"} to {CustomName: "MyName"}
        let command = JSON.stringify(this.entityTag.Data)
            .replace(/\"([^(\")"]+)\":/g, '$1:');
        return command != '{}' ? command : '';
    }
}