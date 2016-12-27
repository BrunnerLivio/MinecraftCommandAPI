import { FallingBlock, IFallingBlock } from './';

describe('FallingBlock', () => {
    it('should return tags', () => {
        let fallingBlock: IFallingBlock = new FallingBlock();
        expect(fallingBlock.Tag).to.not.be(undefined);
    });
});