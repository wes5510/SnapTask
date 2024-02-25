import { TAG_PREFIX } from '../const';
import * as common from '../../common';
import TrashIcon from './TrashIcon';

export interface ItemProps {
  text: string;
}

export default function Item({ text }: ItemProps) {
  return (
    <div className="text-sm max-w-48 flex items-center">
      <div className="text-slate-400">{TAG_PREFIX}</div>
      <common.Tooltip>
        <common.TooltipTrigger asChild>
          <span className="truncate">{text}</span>
        </common.TooltipTrigger>
        <common.TooltipContent
          align="start"
          side="bottom"
          className="flex items-start gap-2 max-w-96"
        >
          <span className="grow basis-0 break-all">{text}</span>
          <common.Button size="icon" className="w-6 h-6">
            <TrashIcon className="h-4 w-4" />
          </common.Button>
        </common.TooltipContent>
      </common.Tooltip>
    </div>
  );
}
