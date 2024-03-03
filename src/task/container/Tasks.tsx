import { useStore } from '../store';
import TaskItem from './TaskItem';
import { useShallow } from 'zustand/react/shallow';

export default function Tasks() {
  const taskIds = useStore(useShallow((state) => [...state.tasks.keys()]));
  return taskIds.map((id) => <TaskItem key={id} id={id} />);
}
