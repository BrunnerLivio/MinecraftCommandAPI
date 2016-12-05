import { SummonCommand, ISummonCommand } from './';

describe('SummonCommand', () => {
    it('should throw an exception when nothing is given', () => {
        let summonCommand: ISummonCommand = new SummonCommand();
        try {
            summonCommand.Command;
        }
        catch (e) {
            expect(e.message).to.be('You must add an entity to a summon command');
        }
    });
});