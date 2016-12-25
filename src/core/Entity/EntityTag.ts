import { Entity, IEntityTagData, EntityTagData } from './';
import { IGenerateable } from '../';

/**
 * @name IEntityTag
 * @description
 * The wrapper around EntityTagData, which provides an easier
 * way to write data to it.
 */
export interface IEntityTag extends IGenerateable {
    /**
     * @name UUIDLeast
     * @description
     * The unique identifier of the entity
     */
    UUIDLeast: String;
    /**
     * @name UUIDMost
     * @description
     * The unique identifier of the entity
     */
    UUIDMost: String;
    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     */
    Invulnerable: Boolean;
    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     */
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
    AddPassenger(entity: Entity): void;
    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     */
    NoGravity: Boolean;
}

/**
 * @name EntityTag
 * @description
 * The wrapper around EntityTagData, which provides an easier
 * way to write data to it.
 */
export class EntityTag implements IEntityTag, IGenerateable {
    protected data: IEntityTagData = new EntityTagData();

    /**
     * @name UUIDLeast
     * @description
     * Sets the UUIDLeast of the Entity
     * @param {String} value The UUIDLeast which should get set
     */
    public set UUIDLeast(value: String) {
        this.data.UUIDLeast = value;
    }
    /**
     * @name UUIDLeast
     * @description
     * Sets the UUIDLeast of the Entity
     * @returns {String} The UUIDLeast of the entity
     */
    public get UUIDLeast(): String {
        return this.data.UUIDLeast;
    }
    /**
     * @name UUIDMost
     * @description
     * Sets the UUIDMost of the Entity
     * @param {String} value The UUIDMost which should get set
     */
    public set UUIDMost(value: String) {
        this.data.UUIDMost = value;
    }

    /**
     * @name UUIDMost
     * @description
     * Returns the UUIDMost of the Entity
     * @returns {String} The UUIDMost of the entity
     */
    public get UUIDMost(): String {
        return this.data.UUIDMost;
    }

    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     * @param {Boolean} value If the entity is invulnerable or not.
     */
    public set Invulnerable(value: Boolean) {
        this.data.Invulnerable = value;
    }

    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     * @returns {Boolean} If the entity is invulnerable or not.
     */
    public get Invulnerable(): Boolean {
        return this.data.Invulnerable;
    }

    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     * @param {Boolean} value If the entity has or hasn't AI
     */
    public set NoAI(value: Boolean) {
        this.data.NoAI = value;
    }

    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     * @returns {Boolean} If the entity has or hasn't AI
     */
    public get NoAI(): Boolean {
        return this.data.NoAI;
    }

    /**
     * @name AddPassenger
     * @description
     * Adds the given entity as passenger to this entity.
     * @param {Entity} entity The entity, which should get added as passaenger, on top of this entity.
     */
    public AddPassenger(entity: Entity): void {
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

    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     * @param {Boolean} value If the entity should be affacted by gravity or not.
     */
    public set NoGravity(value: Boolean) {
        this.data.NoGravity = value;
    }

    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     * @returns {Boolean} Whether the entity is affected by gravity or not.
     */
    public get NoGravity(): Boolean {
        return this.data.NoGravity;
    }
    /**
     * @name Data
     * @description
     * The data of the entity, which can be converted to the JSON string, 
     * which can be processed by Minecraft.
     */
    public get Data(): IEntityTagData {
        return this.data;
    }
}
