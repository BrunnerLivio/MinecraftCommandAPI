import { IEntity, ICommand } from '../../core';

interface ISummonCommand extends ICommand {

}

class SummonCommand implements ISummonCommand {
    private entity: IEntity;
    private x: String | Number;
    private y: String | Number;
    private z: String | Number;
    /**
     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
     * @param {IEntity} entity The entity which should get summoned
     */
    constructor(entity: IEntity,
        x?: String | Number,
        y?: String | Number,
        z?: String | Number) {
        this.entity = entity;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public get Command(): String {
        let command = '/summon ' + this.entity.Id;
        if (this.x || this.y || this.z) {
            command += ' ' + this.x + ' ' + this.y + ' ' + this.z;
        }
        if (this.entity.Command != '') {
            command += ' ' + this.entity.Command;
        }
        return command;
    }
}

export { SummonCommand, ISummonCommand };