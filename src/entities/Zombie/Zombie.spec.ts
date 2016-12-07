import { Zombie } from './';

describe('Zombie', () => {
    it('should set UUIDLeast', () => {
        let zombie = new Zombie();
        zombie.Tag.UUIDLeast = "Test";
        expect(zombie.Command).to.be('{"uuidLeast":"Test"}');
    });
    it('should set AttackTime', () => {
        let zombie = new Zombie();
        zombie.Tag.AttackTime = 50;
        zombie.Tag.UUIDLeast = "Test";
        expect(zombie.Command).to.be('{"attackTime":50,"uuidLeast":"Test"}');
    });
    it('should set CanBreakDoors', () => {
        let zombie = new Zombie();
        zombie.Tag.CanBreakDoors = true;
        expect(zombie.Command).to.be('{"canBreakDoors":true}');
    });
});