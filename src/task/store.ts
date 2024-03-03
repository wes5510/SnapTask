import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { Task } from './type';

type State = {
  tasks: Map<Task['id'], Task>;
  addNewTask: () => void;
  setCompleted: (params: {
    id: Task['id'];
    completed: Task['completed'];
  }) => void;
  setText: (params: { id: Task['id']; text: Task['text'] }) => void;
};

export const useStore = create<State>()((set) => ({
  tasks: new Map([
    [
      'task-1',
      {
        id: 'task-1',
        text: 'Task 1',
        tagIds: ['tag-1', 'tag-2'],
        completed: true,
      },
    ],
    [
      'task-2',
      {
        id: 'task-2',
        text: 'Task 2',
        tagIds: [],
        completed: false,
      },
    ],
    [
      'task-3',
      {
        id: 'task-3',
        text: 'Task 3',
        tagIds: ['tag-3'],
        completed: false,
      },
    ],
    [
      'task-4',
      {
        id: 'task-4',
        text: 'Task 4',
        tagIds: ['tag-4'],
        completed: false,
      },
    ],
    [
      'task-5',
      {
        id: 'task-5',
        text: 'Task 5',
        tagIds: ['tag-5'],
        completed: false,
      },
    ],
  ]),
  addNewTask: () =>
    set((state) => {
      const newTask = {
        id: nanoid(),
        text: '',
        tagIds: [],
        completed: false,
      };

      return {
        tasks: new Map([[newTask.id, newTask], ...state.tasks]),
      };
    }),
  setCompleted: ({ id, completed }) =>
    set((state) => {
      const task = state.tasks.get(id);

      if (!task) {
        return state;
      }

      return {
        tasks: new Map(state.tasks).set(task.id, {
          ...task,
          completed,
        }),
      };
    }),
  setText: ({ id, text }) =>
    set((state) => {
      const task = state.tasks.get(id);

      if (!task) {
        return state;
      }

      return {
        tasks: new Map(state.tasks).set(task.id, {
          ...task,
          text,
        }),
      };
    }),
}));
