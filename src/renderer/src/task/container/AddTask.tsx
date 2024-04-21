import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../../common/component/Button';
import { nanoid } from 'nanoid';
import { Task } from '../type';

export default function AddTask() {
  const queryClient = useQueryClient();

  const addTask = useMutation({
    mutationFn: (newTask: Task) => window.electronAPI.addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleClick = () => {
    const newTask = {
      id: nanoid(),
      text: '',
      tagIds: [],
      completed: false,
    };

    addTask.mutate(newTask);
  };

  return (
    <Button size="sm" onClick={handleClick}>
      + Task
    </Button>
  );
}
