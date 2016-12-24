import { Entity, IEntityTagData, EntityTagData } from './';
import { IGenerateable } from '../';

interface IEntityTag extends IGenerateable {
    UUIDLeast: String;
    UUIDMost: String;
    Invulnerable: Boolean;
    NoAI: Boolean;
    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     */
    Fire: Number;
    /**
     * @name AddPassenger
     * @description
     * Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     * @param {Entity} entity The entity, which should get added as a passenger on top of the entity.
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

    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     * @returns {Number} THe amount of time, in Ticks, the mob is on fire. -1, when not on fire.
     */
    public get Fire() {
        return this.data.Fire;
    }

    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     * @param {Number} value The amount of ticks the mob is on fire. Must be between -1
     * and 32767. Default -1, when not on fire.
     */
    public set Fire(value: Number) {
        if (value >= -1 && value <= 32767) {
            this.data.Fire = value;
        } else {
            throw new RangeError('Value must be between -1 and 32767');
        }
    }

    public get Data(): IEntityTagData {
        return this.data;
    }
}

export { EntityTag, IEntityTag, EntityTagData };