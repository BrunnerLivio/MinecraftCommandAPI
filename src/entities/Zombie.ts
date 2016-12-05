import { Entity } from '../core';

class Zombie extends Entity {
    constructor() {
        super("Zombie");
    }
    public get Command(): String {
        return "";
    }
}

export { Zombie };