import { ICommand, IEntityTag } from './';

interface IEntity extends ICommand {
    Name: String;
    Tag: IEntityTag;
}

export { IEntity };