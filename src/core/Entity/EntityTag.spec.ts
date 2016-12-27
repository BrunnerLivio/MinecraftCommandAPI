import { EntityTag, IEntityTag, IEntityTagData, Entity } from './';

describe('EntityTag', () => {
    let entityTag: IEntityTag;
    let data: IEntityTagData;
    beforeEach(() => {
        entityTag = new EntityTag();
        data = entityTag.Data as IEntityTagData;
    });

    it('should set UUIDLeast', () => {
        entityTag.UUIDLeast = 'asdf';
        expect(entityTag.UUIDLeast).to.be('asdf');
        expect(data.UUIDLeast).to.be('asdf');
    });

    it('should set UUIDMost', () => {
        entityTag.UUIDMost = 'asdf';
        expect(entityTag.UUIDMost).to.be('asdf');
        expect(data.UUIDMost).to.be('asdf');
    });

    it('should set Invulnerable', () => {
        entityTag.Invulnerable = true;
        expect(entityTag.Invulnerable).to.be(true);
        expect(data.Invulnerable).to.be(true);
    });

    it('should set NoAI', () => {
        entityTag.NoAI = true;
        expect(entityTag.NoAI).to.be(true);
        expect(data.NoAI).to.be(true);
    });

    it('should add a passenger', () => {
        let entity = new Entity('my_entity');
        entityTag.AddPassenger(entity);
        expect(data.Passengers[0].id).to.be('minecraft:my_entity');
        expect(data.Passengers.length).to.be(1);
    });

    it('should set Fire', () => {
        entityTag.Fire = 1;
        expect(entityTag.Fire).to.be(1);
        expect(data.Fire).to.be(1);
    });

    it('should throw an error when Fire value is out of range', () => {
        expect(() => {
            entityTag.Fire = -2
        })
            .to
            .throwException(() => {
                return new RangeError('Value must be between -1 and 32767')
            });
    });
    it('should set NoGravity', () => {
        entityTag.NoGravity = true;
        expect(entityTag.NoGravity).to.be(true);
        expect(data.NoGravity).to.be(true);
    });
});