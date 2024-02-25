import { ChangeEventHandler } from 'react';
import { Checkbox } from './Checkbox';
import * as common from '../../common';
import * as tag from '../../tag';

export interface ItemProps {
  text?: string;
  done?: boolean;
  onChangeDone?: ChangeEventHandler<HTMLButtonElement>;
  onChangeText?: ChangeEventHandler;
}

export default function Item({
  text,
  done,
  onChangeDone,
  onChangeText,
}: ItemProps) {
  return (
    <div className="grid grid-rows-[min-content_1fr] grid-cols-[min-content_1fr]">
      <div className="flex p-2 items-center">
        <Checkbox checked={done} onChange={onChangeDone} />
      </div>
      <common.Input
        placeholder="What would you like to do?"
        value={text}
        onChange={onChangeText}
      />
      <div className="col-start-2 col-end-2 flex gap-2.5">
        <tag.AddButton />
        <div className="flex gap-1.5 flex-wrap">
          <tag.Item text="건강" />
          <tag.Item text="회사" />
          <tag.Item text="abcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjklabcajsdkfljaskldfjkl" />
        </div>
      </div>
    </div>
  );
}
