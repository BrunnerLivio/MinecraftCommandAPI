interface IEntityTag {
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
}

class EntityTag implements IEntityTag {
    private uuidLeast: String;
    private uuidMost: String;
    private invulnerable: Boolean;
    private noAI: Boolean;
    public set UUIDLeast(value: String) {
        this.uuidLeast = value;
    }
    public set UUIDMost(value: String) {
        this.uuidMost = value;
    }
    public set Invulnerable(value: Boolean) {
        this.invulnerable = value;
    }
    public set NoAI(value: Boolean) {
        this.noAI = value;
    }
}

export { EntityTag, IEntityTag };