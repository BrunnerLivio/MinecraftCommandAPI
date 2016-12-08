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
    /**
     * 
     */
    Data?: IEntityTag;
}

class EntityTagData implements IEntityTag {
    public UUIDLeast: String;
    public UUIDMost: String;
    public Invulnerable: Boolean;
    public NoAI: Boolean;
}

class EntityTag implements IEntityTag {
    protected data: IEntityTag = new EntityTagData();

    public set UUIDLeast(value: String) {
        this.data.UUIDLeast = value;
    }
    public set UUIDMost(value: String) {
        this.data.UUIDMost = value;
    }
    public set Invulnerable(value: Boolean) {
        this.data.Invulnerable = value;
    }
    public set NoAI(value: Boolean) {
        this.data.NoAI = value;
    }

    public get Data(): IEntityTag {
        return this.data;
    }
}

export { EntityTag, IEntityTag, EntityTagData };