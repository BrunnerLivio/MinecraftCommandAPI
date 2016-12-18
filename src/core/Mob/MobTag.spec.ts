import { MobTag, IMobTagData } from './';

describe('MobTag', () => {
    it('should set AttackTime', () => {
        let mobTag = new MobTag();
        mobTag.AttackTime = 1;
        expect(mobTag.AttackTime).to.be(1);

        let data = mobTag.Data as IMobTagData;
        expect(data.AttackTime).to.be(1);
    });
});