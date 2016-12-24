import { Position, IPosition, PositionType } from './';
describe('Position', () => {
    let position: IPosition;
    beforeEach(() => {
        position = new Position(1, 2, 3, PositionType.Absolute);
    });

    it('should set and get the X coordinate', () => {
        position.X = 5;
        expect(position.X).to.be(5);
    });

    it('should set and get the Y coordinate', () => {
        position.Y = 5;
        expect(position.Y).to.be(5);
    });

    it('should set and get the Z coordinate', () => {
        position.Z = 5;
        expect(position.Z).to.be(5);
    });

    it('should set and get the Position Type', () => {
        position.Type = PositionType.Relative;
        expect(position.Type).to.be(PositionType.Relative);
    });
});
