import { Zombie } from '../../entities';
import { SummonCommand, ISummonCommand } from './';
import { Position, IPosition, PositionType } from '../../core';

describe('SummonCommand', () => {

    it('should generate a simple summon command', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie ~ ~ ~');
    });
    it('should use relative coordinates', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie, new Position(1, 2, 3, PositionType.Relative));
        expect(summonCommand.Command).to.be('/summon Zombie ~1 ~2 ~3');
    });
    it('should use absolute coordinates', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie, new Position(1, 2, 3, PositionType.Absolute));
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3');
    });

    it('should use default value when no position is given', () => {
        let zombie = new Zombie();
        let summonCommand: ISummonCommand = new SummonCommand(zombie);
        expect(summonCommand.Command).to.be('/summon Zombie ~ ~ ~');
    });

    it('should send data tags', () => {
        let zombie = new Zombie();
        zombie.Tag.AttackTime = 2;
        let summonCommand: ISummonCommand = new SummonCommand(zombie, new Position(1, 2, 3, PositionType.Absolute));
        expect(summonCommand.Command).to.be('/summon Zombie 1 2 3 {AttackTime:2}');
    });
});