import { Task } from './entity';
import { AppDataSource } from '../dataSource';

const repo = AppDataSource.getRepository(Task);

export const create = ({ id, text, completed }: Task) => {
  repo.save({ id, text, completed });
};

export const get = () => {
  return repo.find();
};
