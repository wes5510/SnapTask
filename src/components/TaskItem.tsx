import { ChangeEventHandler } from 'react';
import { Checkbox } from './Checkbox';
import { Input } from './Input';

export interface TaskItemProps {
  text?: string;
  done?: boolean;
  onChangeDone?: ChangeEventHandler<HTMLButtonElement>;
  onChangeText?: ChangeEventHandler;
}

export default function TaskItem({
  text,
  done,
  onChangeDone,
  onChangeText,
}: TaskItemProps) {
  return (
    <div className="flex flex-row gap-1 items-center">
      <div className="flex p-2 items-center">
        <Checkbox checked={done} onChange={onChangeDone} />
      </div>
      <Input
        placeholder="What would you like to do?"
        value={text}
        onChange={onChangeText}
      />
    </div>
  );
}
