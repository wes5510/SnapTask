import { ChangeEventHandler } from 'react';
import { Checkbox } from './Checkbox';
import * as common from '../../common';
import * as tag from '../../tag';
import Tags from '../container/Tags';

export interface ItemProps {
  id: string;
  text?: string;
  checked?: boolean;
  onChangeCheck?: ChangeEventHandler<HTMLButtonElement>;
  onChangeText?: ChangeEventHandler;
}

export default function Item({
  id,
  text,
  checked,
  onChangeCheck,
  onChangeText,
}: ItemProps) {
  return (
    <div className="grid grid-rows-[min-content_1fr] grid-cols-[min-content_1fr]">
      <div className="flex p-2 items-center">
        <Checkbox checked={checked} onChange={onChangeCheck} />
      </div>
      <common.Input
        placeholder="What would you like to do?"
        value={text}
        onChange={onChangeText}
      />
      <div className="col-start-2 col-end-2 flex gap-2.5">
        <tag.AddButton />
        <div className="flex gap-1.5 flex-wrap">
          <Tags taskId={id} />
        </div>
      </div>
    </div>
  );
}
