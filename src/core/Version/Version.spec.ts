import { Version } from './Version';


describe('Version', () => {
    it('should return the name of the version', () => {
        expect(new Version('name', '1.1').Name).to.be('name');
    });

    it('should return the supported mc version', () => {
        expect(new Version('name', '1.1').MCVersion).to.be('1.1');
    });
});
