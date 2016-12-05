import { IEntity } from './';

abstract class Entity implements IEntity {
    private name: String;
    constructor(name: string) {
        this.name = name;
    }
    public get Name(): String {
        return this.name;
    }

    abstract Command: String;
}

export { Entity };