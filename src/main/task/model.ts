import { Task } from './entity';
import { appDataSource } from '../dataSource';

export const create = ({ id, text, completed }: Task) => {
  appDataSource.getRepository(Task).save({ id, text, completed });
};

export const get = () => {
  return appDataSource.getRepository(Task).find();
};

export const updateText = ({ id, text }: Pick<Task, 'id' | 'text'>) => {
  return appDataSource.getRepository(Task).update({ id }, { text });
};
