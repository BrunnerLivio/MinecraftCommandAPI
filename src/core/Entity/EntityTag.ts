interface IEntityTag {
    /**
     * The least significant bits of this entity's Universally Unique IDentifier.
     */
    UUIDLeast: String;
}

class EntityTag implements IEntityTag {
    private uuidLeast: String;
    public set UUIDLeast(value: String) {
        this.uuidLeast = value;
    }
}

export { EntityTag, IEntityTag };