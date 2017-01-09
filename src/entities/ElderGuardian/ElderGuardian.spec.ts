import { ElderGuardian, IElderGuardian } from './';

describe('ElderGuardian', () => {
    it('should return tags', () => {
        let elderGuardian: IElderGuardian = new ElderGuardian();
        expect(elderGuardian.Tag).to.not.be(undefined);
    });
    
    it('should return the correct id', () => {
        let elderGuardian: IElderGuardian = new ElderGuardian();
        expect(elderGuardian.Id).to.be('minecraft:elder_guardian');
    });
});