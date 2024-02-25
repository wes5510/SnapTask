import { TAG_PREFIX } from '../const';
import * as common from '../../common';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

export default function AddButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <common.Button variant="outline" size="xs">
          + Tag
        </common.Button>
      </PopoverTrigger>
      <PopoverContent className="w-48" align="start">
        <div className="flex flex-row items-center gap-1">
          <span className="text-slate-400">{TAG_PREFIX}</span>
          <common.Input
            placeholder="Type to add tags"
            className="text-sm h-8 grow basis-0"
          />
          <common.Button size="xs">Add</common.Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
