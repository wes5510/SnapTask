import { ChangeEventHandler } from 'react';
import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Button } from './Button';
import AddTagButton from './AddTagButton';
import TagItem from './TagItem';

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
    <div className="grid grid-rows-[min-content_1fr] grid-cols-[min-content_1fr]">
      <div className="flex p-2 items-center">
        <Checkbox checked={done} onChange={onChangeDone} />
      </div>
      <Input
        placeholder="What would you like to do?"
        value={text}
        onChange={onChangeText}
      />
      <div className="col-start-2 col-end-2 flex gap-2.5">
        <AddTagButton />
        <div className="flex gap-1.5 flex-wrap">
          <TagItem text="건강" />
          <TagItem text="회사" />
          <TagItem text="abcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjkl" />
        </div>
      </div>
    </div>
  );
}
