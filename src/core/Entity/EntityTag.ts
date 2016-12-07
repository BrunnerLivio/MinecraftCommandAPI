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
}

class EntityTag implements IEntityTag {
    private uuidLeast: String;
    private uuidMost: String;
    private invulnerable;
    public set UUIDLeast(value: String) {
        this.uuidLeast = value;
    }
    public set UUIDMost(value: String) {
        this.uuidMost = value;
    }
    public set Invulnerable(value: Boolean) {
        this.invulnerable = value;
    }
}

export { EntityTag, IEntityTag };