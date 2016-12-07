import { Zombie } from '../entities';
import { SummonCommand, ISummonCommand } from './';

describe('SummonCommand', () => {
    it('should generate a simple summon command', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie');
    });
    it('should use relative coordinates', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie, '~1', '~2', '~3');
        expect(summonCommand.Command).to.be('/summon Zombie ~1 ~2 ~3');
    });
    it('should use absolute coordinates', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie, 1, 2, 3);
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3');
    });
    it('should send data tags', () => {
        let zombie = new Zombie();
        zombie.Tag.AttackTime = 2;
        let summonCommand: ISummonCommand = new SummonCommand(zombie, 1, 2, 3);
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3 {"attackTime":2}');
    });
});