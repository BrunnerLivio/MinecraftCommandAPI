import { IEntityTag, EntityTag } from '../../core';
import { IFallingBlockTagData, FallingBlockTagData } from './';
/**
 * @name IFallingBlockTag
 * @description
 * The wrapper around FallingBlockTagData, which provides an easier
 * way to write data to it.
 */
export interface IFallingBlockTag extends IEntityTag {
    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block. 
     */
    Block: String;
    /**
     * @name Time
     * @description
     * Whether or not the block despawns before hitting the ground. 
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0. 
     * If set to 0 the block will despawn immediately. 
     * Recommended to keep this value as 1. -1 will never despawn.
     */
    Time: Number;
    /**
     * @name DropItem
     * @description
     * Whether or not the block will drop its item form if the block is unable to be placed. 
     * If set to 'false' the block will not drop its respective item, 
     * if set to 'true' the block will drop its respective item.
     */
    DropItem: Boolean;
}

/**
 * @name FallingBlockTag
 * @description
 * The wrapper around FallingBlockTagData, which provides an easier
 * way to write data to it.
 */
export class FallingBlockTag extends EntityTag implements IFallingBlockTag {
    protected data: IFallingBlockTagData = new FallingBlockTagData();
    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block. 
     * @param {String} value The block id, which should get displayed as falling block
     */
    public set Block(value: String) {
        this.data.Block = value;
    }

    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block. 
     */
    public get Block(): String {
        return this.data.Block;
    }

    /**
     * @name Time
     * @description
     *  Whether or not the block despawns before hitting the ground. 
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0. 
     * If set to 0 the block will despawn immediately. 
     * Recommended to keep this value as 1. -1 will never despawn.
     * Must be between -1 and 127
     * @param {Number} value Whether or not the block despawns before hitting the ground. Must be between -1 and 127
     */
    public set Time(value: Number) {
        if (value >= -1 && value <= 127) {
            this.data.Time = value;
        } else {
            throw new RangeError('Time must be between -1 and 127');
        }
    }

    /**
     * /**
     * @name Time
     * @description
     *  Whether or not the block despawns before hitting the ground. 
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0. 
     * If set to 0 the block will despawn immediately. 
     * Recommended to keep this value as 1. -1 will never despawn.
     */
    public get Time(): Number {

        return this.data.Time;
    }

    /**
     * @name DropItem
     * @description
     * If set to 'false' the block will not drop its respective item, 
     * if set to 'true' the block will drop its respective item.
     * The respective item can be set using 'Block'
     * @param {Boolean} value If the fallingblock should drop its respective item
     */
    public set DropItem(value: Boolean) {
        this.data.DropItem = value;
    }

    /**
     * @name DropItem
     * @description
     * If set to 'false' the block will not drop its respective item, 
     * if set to 'true' the block will drop its respective item.
     * The respective item can be set using 'Block'
     */
    public get DropItem(): Boolean {
        return this.data.DropItem;
    }

    /**
     * @name Data
     * @description
     * The data of the falling block, which can be converted to the JSON string, 
     * which can be processed by Minecraft.
     */
    public get Data(): IFallingBlockTagData {
        return this.data;
    }
}