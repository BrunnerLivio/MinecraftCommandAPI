import { Entity, IEntityTagData, EntityTagData } from './';
import { IGenerateable } from '../';

interface IEntityTag extends IGenerateable {
    UUIDLeast: String;
    UUIDMost: String;
    Invulnerable: Boolean;
    NoAI: Boolean;
    id: String;
    /**
     * 	Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     */
    AddPassenger(entity: Entity);
}


class EntityTag implements IEntityTag, IGenerateable {
    protected data: IEntityTagData = new EntityTagData();

    /**
     * Sets the UUIDLeast of the Entity
     */
    public set UUIDLeast(value: String) {
        this.data.UUIDLeast = value;
    }
    /**
     * Sets the UUIDMost of the Entity
     */
    public set UUIDMost(value: String) {
        this.data.UUIDMost = value;
    }
    public set Invulnerable(value: Boolean) {
        this.data.Invulnerable = value;
    }
    public set NoAI(value: Boolean) {
        this.data.NoAI = value;
    }
    public AddPassenger(entity: Entity) {
        if (this.data.Passengers == undefined) {
            this.data.Passengers = new Array();
        }
        let data: IEntityTagData = entity.Tag.Data as IEntityTagData;
        data.id = entity.Name;
        this.data.Passengers.push(data);
    }

    public get id(): String {
        return this.data.id;
    }

    public get Data(): IEntityTagData {
        return this.data;
    }
}

export { EntityTag, IEntityTag, EntityTagData };