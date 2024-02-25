import { TAG_PREFIX } from '../const';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

export interface TagItemProps {
  text: string;
}

export default function TagItem({ text }: TagItemProps) {
  return (
    <div className="text-base max-w-48 flex">
      <div className="text-slate-400">{TAG_PREFIX}</div>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="truncate">{text}</div>
        </TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </div>
  );
}
