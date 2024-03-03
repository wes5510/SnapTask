import * as tag from '../../tag';
import { useStore } from '../store';

export interface TagsProps {
  taskId: string;
}

export default function Tags({ taskId }: TagsProps) {
  const tagIds = useStore((state) => state.tasks.get(taskId)?.tagIds ?? []);

  return tagIds.map((tagId) => <tag.TagItem key={tagId} id={tagId} />);
}
