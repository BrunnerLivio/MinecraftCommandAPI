import { Mob, EntityTag } from '../';

class MockCustomTag extends EntityTag {
    public get AttackTime() {
        return 123;
    }
}

describe('Mob', () => {
    it('should use a custom Tag', () => {
        let mob = new Mob('my_entity', new MockCustomTag());
        expect(mob.Tag.AttackTime).to.be(123);
    });
    it('should use the default Tag', () => {
        let mob = new Mob('my_entity');
        mob.Tag.AttackTime = 1;
        expect(mob.Tag.AttackTime).to.be(1);
    });
});