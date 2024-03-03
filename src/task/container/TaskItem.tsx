import { ChangeEventHandler } from 'react';
import Item from '../component/Item';
import { useStore } from '../store';

export interface TaskItemProps {
  id: string;
}

export default function TaskItem({ id }: TaskItemProps) {
  const task = useStore((state) => state.tasks.get(id));
  const setCompleted = useStore((state) => state.setCompleted);
  const setText = useStore((state) => state.setText);

  const handleChangeCheck = (checked: boolean | string) => {
    setCompleted({ id, completed: !!checked });
  };

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText({ id, text: e.target.value });
  };

  return task ? (
    <Item
      id={id}
      text={task.text}
      checked={task.completed}
      onChangeCheck={handleChangeCheck}
      onChangeText={handleChangeText}
    />
  ) : null;
}
