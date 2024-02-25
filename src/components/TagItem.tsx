import { TAG_PREFIX } from '../const';
import { Button } from './Button';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';
import TrashIcon from './TrashIcon';

export interface TagItemProps {
  text: string;
}

export default function TagItem({ text }: TagItemProps) {
  return (
    <div className="text-sm max-w-48 flex items-center">
      <div className="text-slate-400">{TAG_PREFIX}</div>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="truncate">{text}</span>
        </TooltipTrigger>
        <TooltipContent
          align="start"
          side="bottom"
          className="flex items-start gap-2 max-w-96"
        >
          <span className="grow basis-0 break-all">{text}</span>
          <Button size="icon" className="w-6 h-6">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
