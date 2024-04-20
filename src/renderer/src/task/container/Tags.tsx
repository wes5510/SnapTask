import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import * as tag from '../../tag';
import { useStore } from '../store';
import { Task } from '../type';

export interface TagsProps {
  taskId: string;
}

export default function Tags({ taskId }: TagsProps) {
  const { data: tagIds = [] } = useSuspenseQuery(
    queryOptions({
      queryKey: ['tasks'],
      queryFn: async (): Promise<Map<Task['id'], Task>> => {
        const tasks = await window.electronAPI.getTasks();
        return new Map(tasks.map((t) => [t.id, t]));
      },
      select: (tasks) => tasks.get(taskId)?.tagIds,
    }),
  );
  const deleteTagId = useStore((state) => state.deleteTagId);

  const handleDelete = (tagId: string) => {
    deleteTagId({ id: taskId, tagId });
  };

  return tagIds.map((tagId) => (
    <tag.TagItem key={tagId} id={tagId} onDelete={handleDelete} />
  ));
}
