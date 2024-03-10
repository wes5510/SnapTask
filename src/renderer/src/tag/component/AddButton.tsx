import { TAG_PREFIX } from '../const';
import * as common from '../../common';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface AddButtonProps {
  open?: boolean;
  text: string;
  onClick: MouseEventHandler;
  onClickSubmit?: MouseEventHandler;
  onChangeText: ChangeEventHandler<HTMLInputElement>;
}

export default function AddButton({
  open,
  text,
  onClick,
  onClickSubmit,
  onChangeText,
}: AddButtonProps) {
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <common.Button variant="outline" size="xs" onClick={onClick}>
          + Tag
        </common.Button>
      </PopoverTrigger>
      <PopoverContent className="w-48" align="start">
        <div className="flex flex-row items-center gap-1">
          <span className="text-slate-400">{TAG_PREFIX}</span>
          <common.Input
            placeholder="Type to add tags"
            className="text-sm h-8 grow basis-0"
            value={text}
            onChange={onChangeText}
          />
          <common.Button size="xs" onClick={onClickSubmit}>
            Add
          </common.Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
