import { ZombieTag, IZombieTag, Zombie, IZombieTagData } from './';

describe('ZombieTag', () => {
    it('should set CanBreakDoors', () => {
        let zombie = new Zombie();
        zombie.Tag.CanBreakDoors = true;
        expect(zombie.Tag.CanBreakDoors).to.be(true);

        let data = zombie.Tag.Data as IZombieTagData;
        expect(data.CanBreakDoors).to.be(true);
    });
});