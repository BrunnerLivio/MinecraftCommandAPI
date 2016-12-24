
interface IEntityTagData {
    /**
     * The least significant bits of this entity's Universally Unique IDentifier.
     */
    UUIDLeast: String;
    /**
     * The most significant bits of this entity's Universally Unique IDentifier. This is joined with UUIDLeast to form this entity's unique ID
     */
    UUIDMost: String;
    /**
     * Makes mobs invulnerable
     */
    Invulnerable: Boolean;
    /**
     * If true, the mob's AI will be disabled. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.
     */
    NoAI: Boolean;
    /**
     * 	Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     */
    Passengers: EntityTagData[];
    /**
     *  The id of the entity, set by Minecraft
     */
    id: String;
    /**
     * 	Determines how many ticks a mob is on fire.
     */
    Fire: Number;
}

/**
 * This class represents the real Tags, which get converted to JSON String, when 
 * the command is getting generated.
 */
class EntityTagData implements IEntityTagData {
    public UUIDLeast: String;
    public UUIDMost: String;
    public Invulnerable: Boolean;
    public NoAI: Boolean;
    public Passengers: EntityTagData[];
    public id: String;
    /**
     * 	Determines how many ticks a mob is on fire.
     */
    public Fire: Number;
}

export { EntityTagData, IEntityTagData };