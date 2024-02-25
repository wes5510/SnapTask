import * as tag from '../tag/type';

export type Task = {
  id: string;
  text: string;
  completed: boolean;
  tagIds: tag.Tag['id'][];
};
