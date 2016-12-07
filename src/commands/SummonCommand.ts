import { ISummonCommand } from './';
import { IEntity } from '../core';

class SummonCommand implements ISummonCommand {
    private entity: IEntity
    /**
     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
     * @param {IEntity} entity The entity which should get summoned
     */
    constructor(entity: IEntity) {
        this.entity = entity;
    }

    public get Command(): String {
        let command = '/summon ' + this.entity.Name;
        if (this.entity.Command != "") {
            command += " " + this.entity.Command;
        }
        return command;
    }
}

export { SummonCommand };