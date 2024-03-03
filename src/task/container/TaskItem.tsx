import Item from '../component/Item';
import { useStore } from '../store';

export interface TaskItemProps {
  id: string;
}

export default function TaskItem({ id }: TaskItemProps) {
  const task = useStore((state) => state.tasks.get(id));
  const setCompleted = useStore((state) => state.setCompleted);

  const handleChangeCheck = (checked: boolean | string) => {
    setCompleted({ id, completed: !!checked });
  };

  return task ? (
    <Item
      id={id}
      text={task.text}
      checked={task.completed}
      onChangeCheck={handleChangeCheck}
    />
  ) : null;
}
