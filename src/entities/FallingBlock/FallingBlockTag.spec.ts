import { FallingBlockTag, IFallingBlockTagData } from './';

describe('FallingBlockTag', () => {
    let tag: FallingBlockTag;
    let data: IFallingBlockTagData;

    beforeEach(() => {
        tag = new FallingBlockTag();
        data = tag.Data as IFallingBlockTagData;
    });

    it('should set Block', () => {
        tag.Block = 'minecraft:stone';
        expect(tag.Block).to.be('minecraft:stone');
        expect(data.Block).to.be('minecraft:stone');
    });

    it('should set Time', () => {
        tag.Time = 1;
        expect(tag.Time).to.be(1);
        expect(data.Time).to.be(1);
    });

    it('should throw an exception when Time is not valid', () => {
        expect(() => {
            tag.Time = -2;
        })
            .to
            .throwException(() => {
                return new RangeError('Time must be between -1 and 127')
            });
        expect(() => {
            tag.Time = 128;
        })
            .to
            .throwException(() => {
                return new RangeError('Time must be between -1 and 127')
            });
    });

    it('should set DropItem', () => {
        tag.DropItem = true;
        expect(tag.DropItem).to.be(true);
        expect(data.DropItem).to.be(true);
    })
});