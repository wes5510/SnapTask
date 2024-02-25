import { TAG_PREFIX } from '../const';
import { Button } from './Button';
import { Input } from './Input';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

export default function AddTagButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="xs">
          + Tag
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40" align="start">
        <div className="flex flex-row items-center gap-1">
          <span className="text-slate-400">{TAG_PREFIX}</span>
          <Input placeholder="Type to add tags" className="text-sm h-8" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
