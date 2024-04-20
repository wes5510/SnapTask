import { Button } from '../../common/component/Button';
import { nanoid } from 'nanoid';
import { useStore } from '../store';

export default function AddTask() {
  const addTask = useStore((state) => state.addTask);

  const handleClick = () => {
    const newTask = {
      id: nanoid(),
      text: '',
      tagIds: [],
      completed: false,
    };

    addTask(newTask);
    window.electronAPI.addTask({
      id: newTask.id,
      text: newTask.text,
      completed: newTask.completed,
    });
  };

  return (
    <Button size="sm" onClick={handleClick}>
      + Task
    </Button>
  );
}
