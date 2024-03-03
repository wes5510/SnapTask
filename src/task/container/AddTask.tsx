import { Button } from '../../common/component/Button';
import { useStore } from '../store';

export default function AddTask() {
  const addNewTask = useStore((state) => state.addNewTask);

  return (
    <Button size="sm" onClick={addNewTask}>
      + Task
    </Button>
  );
}
