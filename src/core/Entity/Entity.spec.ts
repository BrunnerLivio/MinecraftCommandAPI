import { Entity, EntityTag, IEntityTag, IEntityTagData } from './';

interface IMockCustomTag extends IEntityTag {
    AttackTime: String;
}
class MockCustomTag extends EntityTag implements IMockCustomTag {
    public get AttackTime(): String {
        return '123';
    }
}

describe('Entity', () => {
    it('should use a custom Tag', () => {
        let entity = new Entity('my_entity', new MockCustomTag());
        let tag = entity.Tag as IMockCustomTag;
        expect(tag.AttackTime).to.be('123');
    });

    it('should use the default Tag', () => {
        let entity = new Entity('my_entity');
        entity.Tag.UUIDMost = '123';
        expect(entity.Tag.UUIDMost).to.be('123');
        let data = entity.Tag.Data as IEntityTagData;
        expect(data.UUIDMost).to.be('123');
    })
});