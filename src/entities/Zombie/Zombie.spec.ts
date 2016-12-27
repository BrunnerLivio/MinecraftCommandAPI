import { Zombie } from './';

describe('Zombie', () => {
    it('should set UUIDLeast', () => {
        let zombie = new Zombie();
        zombie.Tag.UUIDLeast = 'Test';
        expect(zombie.Command).to.be('{UUIDLeast:"Test"}');
    });
    it('should set AttackTime', () => {
        let zombie = new Zombie();
        zombie.Tag.AttackTime = 50;
        zombie.Tag.UUIDLeast = 'Test';
        expect(zombie.Command).to.be('{AttackTime:50,UUIDLeast:"Test"}');
    });
    it('should set CanBreakDoors', () => {
        let zombie = new Zombie();
        zombie.Tag.CanBreakDoors = true;
        expect(zombie.Command).to.be('{CanBreakDoors:true}');
    });
    it('should add a Passenger', () => {
        let zombie1 = new Zombie();
        zombie1.Tag.AttackTime = 5;
        zombie1.Tag.UUIDMost = '25';
        let zombie2 = new Zombie();
        zombie2.Tag.AddPassenger(zombie1);
        expect(zombie2.Command).to.be('{Passengers:[{AttackTime:5,UUIDMost:"25",id:"minecraft:zombie"}]}');
    });
});