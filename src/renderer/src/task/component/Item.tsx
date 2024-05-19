import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { Checkbox } from './Checkbox';
import * as common from '../../common';

export interface ItemProps {
  text?: string;
  checked?: boolean;
  onChangeCheck?: (checked: boolean | string) => void;
  onChangeText?: ChangeEventHandler;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export default function Item({
  text,
  checked,
  onChangeCheck,
  onChangeText,
  onKeyDown,
}: ItemProps) {
  return (
    <div className="grid grid-rows-[min-content_1fr] grid-cols-[min-content_1fr]">
      <div className="flex p-2 items-center">
        <Checkbox checked={checked} onCheckedChange={onChangeCheck} />
      </div>
      <common.Input
        placeholder="What would you like to do?"
        value={text}
        onChange={onChangeText}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
