import { ISummonCommand } from './';
import { IEntity } from '../core';

class SummonCommand implements ISummonCommand {
    private entity: IEntity
    constructor();
    constructor(entity?: IEntity) {
        this.entity = entity;
    }

    public get Command(): String {
        if (this.entity == undefined) {
            throw new Error('You must add an entity to a summon command');
        }
        let command = '/summon ' + this.entity.Command;
        return command;
    }
}

export { SummonCommand };