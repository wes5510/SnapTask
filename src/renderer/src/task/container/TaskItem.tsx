import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import Item from '../component/Item';
import { useStore } from '../store';
import { Task } from '../type';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export interface TaskItemProps {
  id: string;
}

export default function TaskItem({ id }: TaskItemProps) {
  const { data: task } = useSuspenseQuery(
    queryOptions({
      queryKey: ['tasks'],
      queryFn: async (): Promise<Map<Task['id'], Task>> => {
        const tasks = await window.electronAPI.getTasks();
        return new Map(tasks.map((t) => [t.id, t]));
      },
      select: (tasks) => tasks.get(id),
    }),
  );
  const [text, setText] = useState(task?.text);
  const setCompleted = useStore((state) => state.setCompleted);
  const deleteTask = useStore((state) => state.deleteTask);
  const prependTagId = useStore((state) => state.prependTagId);

  const handleChangeCheck = (checked: boolean | string) => {
    setCompleted({ id, completed: !!checked });
  };

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
    window.electronAPI.updateTaskText({ id, text: e.target.value });
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Backspace' && e.currentTarget.value === '') {
      deleteTask(id);
    }
  };

  const handleAddTag = (tagId: string) => {
    prependTagId({ id, tagId });
  };

  return task ? (
    <Item
      id={id}
      text={text}
      checked={task.completed}
      onChangeCheck={handleChangeCheck}
      onChangeText={handleChangeText}
      onKeyDown={handleKeyDown}
      onAddTag={handleAddTag}
    />
  ) : null;
}
