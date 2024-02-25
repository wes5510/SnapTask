import FilterButton from './FilterButton';
import { Separator } from './Separator';

export default function Filter() {
  return (
    <div className="flex flex-row items-center">
      <FilterButton>In Progress</FilterButton>
      <Separator orientation="vertical" />
      <FilterButton>Done</FilterButton>
      <Separator orientation="vertical" />
      <FilterButton>All</FilterButton>
    </div>
  );
}
