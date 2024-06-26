import { create } from 'zustand';
import { Task } from './type';

type State = {
  tasks: Map<Task['id'], Task>;
  addTask: (task: Task) => void;
  setCompleted: (params: {
    id: Task['id'];
    completed: Task['completed'];
  }) => void;
  setText: (params: { id: Task['id']; text: Task['text'] }) => void;
  deleteTask: (id: Task['id']) => void;
  prependTagId: (params: { id: Task['id']; tagId: string }) => void;
  deleteTagId: (params: { id: Task['id']; tagId: string }) => void;
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
  addTask: (task: Task) =>
    set((state) => ({
      tasks: new Map([[task.id, task], ...state.tasks]),
    })),
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
  deleteTask: (id) =>
    set((state) => {
      const newTasks = new Map(state.tasks);
      newTasks.delete(id);

      return {
        tasks: newTasks,
      };
    }),
  prependTagId: ({ id, tagId }) =>
    set((state) => {
      const task = state.tasks.get(id);

      if (!task) {
        return state;
      }

      return {
        tasks: new Map(state.tasks).set(task.id, {
          ...task,
          tagIds: [tagId, ...task.tagIds],
        }),
      };
    }),
  deleteTagId: ({ id, tagId }) =>
    set((state) => {
      const task = state.tasks.get(id);

      if (!task) {
        return state;
      }

      return {
        tasks: new Map(state.tasks).set(task.id, {
          ...task,
          tagIds: task.tagIds.filter((t) => t !== tagId),
        }),
      };
    }),
}));
