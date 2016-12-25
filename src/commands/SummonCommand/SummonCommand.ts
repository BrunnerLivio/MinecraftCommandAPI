import { IEntity, ICommand, Position, PositionType } from '../../core';

/**
 * @name ISummonCommand
 * @description
 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
 */
export interface ISummonCommand extends ICommand {

}

/**
 * @name SummonCommand
 * @description
 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
 */
export class SummonCommand implements ISummonCommand {
    private entity: IEntity;
    private position: Position | undefined;
    /**
     * @description
     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
     * @param {IEntity} entity The entity which should get summo2ned
     */
    constructor(entity: IEntity,
        position?: Position) {
        this.entity = entity;
        this.position = position;
    }

    /**
     * @name Command
     * @description
     * Generates the summon command and returns it as a string.
     * @returns {String} The summon command, which is ready to import into Minecraft.
     */
    public get Command(): String {
        let command: String = '/summon ' + this.entity.Id;
        if (this.position != undefined) {
            if (this.position.Type == PositionType.Absolute) {
                command += ' ' + this.position.X +
                    ' ' + this.position.Y +
                    ' ' + this.position.Z;
            } else {
                command += ' ~' + this.position.X +
                    ' ~' + this.position.Y +
                    ' ~' + this.position.Z;
            }
        } else {
            command += ' ~ ~ ~';
        }
        if (this.entity.Command != '') {
            command += ' ' + this.entity.Command;
        }
        return command;
    }
}
