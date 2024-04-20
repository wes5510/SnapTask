import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import TaskItem from './TaskItem';
import { Task } from '../type';

export default function Tasks() {
  const { data: taskIds } = useSuspenseQuery(
    queryOptions({
      queryKey: ['tasks'],
      queryFn: async (): Promise<Map<Task['id'], Task>> => {
        const tasks = await window.electronAPI.getTasks();
        return new Map(tasks.map((t) => [t.id, t]));
      },
      select: (tasks) => [...tasks.keys()],
    }),
  );

  return taskIds.map((id) => <TaskItem key={id} id={id} />);
}
