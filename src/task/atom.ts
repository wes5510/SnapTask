import { atom } from 'jotai';
import { Task } from './type';

export const tasksAtom = atom<Task[]>([
  {
    id: 'task-1',
    text: 'Task 1',
    tagIds: ['1', '2'],
    completed: false,
  },
  {
    id: 'task-2',
    text: 'Task 2',
    tagIds: [],
    completed: false,
  },
  {
    id: 'task-3',
    text: 'Task 3',
    tagIds: ['3'],
    completed: false,
  },
  {
    id: 'task-4',
    text: 'Task 4',
    tagIds: ['4'],
    completed: false,
  },
  {
    id: '5',
    text: 'Task 5',
    tagIds: ['5'],
    completed: false,
  },
]);
