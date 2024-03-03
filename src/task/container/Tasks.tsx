import { memo } from 'react';
import { useStore } from '../store';
import TaskItem from './TaskItem';

const MTaskItem = memo(TaskItem);

export default function Tasks() {
  const taskIds = useStore((state) => [...state.tasks.keys()]);
  return taskIds.map((id) => <MTaskItem key={id} id={id} />);
}
