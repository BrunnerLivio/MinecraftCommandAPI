import { Entity, IEntityTagData, EntityTagData } from './';
import { IGenerateable } from '../';

interface IEntityTag extends IGenerateable {
    UUIDLeast: String;
    UUIDMost: String;
    Invulnerable: Boolean;
    NoAI: Boolean;
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

    public get UUIDLeast(): String {
        return this.data.UUIDLeast;
    }
    /**
     * Sets the UUIDMost of the Entity
     */
    public set UUIDMost(value: String) {
        this.data.UUIDMost = value;
    }

    public get UUIDMost(): String {
        return this.data.UUIDMost;
    }

    public set Invulnerable(value: Boolean) {
        this.data.Invulnerable = value;
    }

    public get Invulnerable(): Boolean {
        return this.data.Invulnerable;
    }

    public set NoAI(value: Boolean) {
        this.data.NoAI = value;
    }

    public get NoAI() {
        return this.data.NoAI;
    }

    public AddPassenger(entity: Entity) {
        if (this.data.Passengers == undefined) {
            this.data.Passengers = new Array();
        }
        let data: IEntityTagData = entity.Tag.Data as IEntityTagData;
        data.id = entity.Id;
        this.data.Passengers.push(data);
    }

    public get Data(): IEntityTagData {
        return this.data;
    }
}

export { EntityTag, IEntityTag, EntityTagData };