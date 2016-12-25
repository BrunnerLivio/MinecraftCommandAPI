import { PositionType } from './';
/**
 * @name IPosition
 * @description
 * A position which can be either absolute or relative.
 */
export interface IPosition {
    /**
     * @name X
     * @description
     * The coordinate on the X-Axis
     */
    X: Number;
    /**
     * @name Y
     * @description
     * The coordinate on the Y-Axis
     */
    Y: Number;
    /**
     * @name Z
     * @description
     * The coordinate on the Z-Axis
     */
    Z: Number;
    /**
     * @name Type
     * @description 
     * The type of the position, which can be either absolute or relative
     */
    Type: PositionType;
}
/**
 * @name Position
 * @description
 * Represents one position, containing X, Y, Z coordinates
 * to identify the current position 
 */
export class Position implements IPosition {
    /**
     * @param {Number} x The coordinate on the X-Axis
     * @param {Number} y The coordinate on the Y-Axis 
     * @param {Number} z The coordinate on the Z-Axis
     * @param {PositionType} type  The type of the position, which can be either absolute or relative
     */
    constructor(private x: Number,
        private y: Number,
        private z: Number,
        private type: PositionType) {
    }
    /**
     * @returns The X-Coordinate of the position.
     */
    public get X(): Number {
        return this.x;
    }
    /**
     * @param {Number} value The x coordinate which get set
     */
    public set X(value: Number) {
        this.x = value;
    }

    /**
     * @returns The Y-Coordinate of the position.
     */
    public get Y(): Number {
        return this.y;
    }
    /**
     * @param {Number} value The y coordinate which get set
     */
    public set Y(value: Number) {
        this.y = value;
    }

    /**
     * @returns The Z-Coordinate of the position.
     */
    public get Z(): Number {
        return this.z;
    }
    /**
     * @param {Number} value The z coordinate which should get set
     */
    public set Z(value: Number) {
        this.z = value;
    }

    /**
     * @returns The type of the position, which can be either relative or absolute.
     */
    public get Type() {
        return this.type;
    }

    /**
     * @param {PositionType} value The type of the position, which can be either relative or absolute.
     */
    public set Type(value: PositionType) {
        this.type = value;
    }
}
