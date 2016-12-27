import { Entity, IEntity } from '../../core';
import { FallingBlockTag, IFallingBlockTag } from './';

/**
 * @name IFallingBlock
 * @description
 * The falling_block entity represents a block with entity physics applied. 
 * It has various applications, ranging from simple displays of falling objects 
 * to advanced command block creations.
 */
export interface IFallingBlock extends IEntity {

}

/**
 * @name FallingBlock
 * @description
 * The falling_block entity represents a block with entity physics applied. 
 * It has various applications, ranging from simple displays of falling objects 
 * to advanced command block creations.
 */
export class FallingBlock extends Entity implements IFallingBlock {
    /**
     * @description
     * Initializes the FallingBlock
     */
    constructor() {
        super('falling_block', new FallingBlockTag());
    }
    /**
     * Tags which modify the entity with your given values.  
     */
    public get Tag(): IFallingBlockTag {
        return this.entityTag as FallingBlockTag;
    }
}