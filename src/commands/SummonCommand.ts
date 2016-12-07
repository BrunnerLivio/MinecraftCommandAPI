import { ISummonCommand } from './';
import { IEntity } from '../core';

class SummonCommand implements ISummonCommand {
    private entity: IEntity
    constructor(entity: IEntity) {
        this.entity = entity;
    }

    public get Command(): String {
        let command = '/summon ' + this.entity.Name;
        return command;
    }
}

export { SummonCommand };