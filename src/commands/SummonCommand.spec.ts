import { Zombie } from '../entities';
import { SummonCommand, ISummonCommand } from './';

describe('SummonCommand', () => {
    it('should throw an exception when nothing is given', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie');
    });
    it('should set UUIDLeast', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie);
        zombie.Tag.UUIDLeast = "Test";
        expect(summonCommand.Command).to.be('/summon Zombie {"uuidLeast":"Test"}');
    });
});