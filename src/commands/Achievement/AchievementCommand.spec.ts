import { AchievementCommand, Achievement, IAchievementCommand } from './';

describe('AchievementCommand', () => {
    it('should generate a simple achievement command', () => {
        let command: String = new AchievementCommand()
            .Give(Achievement.openInventory)
            .To('@a')
            .Command;
        expect(command).to.be('/achievement give achievement.openInventory @a');
    });
    it('should generate a take achievement command', () => {
        let command: String = new AchievementCommand()
            .Take(Achievement.overkill)
            .From('SutrangSucher')
            .Command;
        expect(command).to.be('/achievement take achievement.overkill SutrangSucher');
    });
    it('should generate an achievement command which deletes all', () => {
        let command: String = new AchievementCommand()
            .Take(Achievement.all)
            .From('@p')
            .Command;
        expect(command).to.be('/achievement take * @p');
    })
});
