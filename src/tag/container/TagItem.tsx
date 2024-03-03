import Item from '../component/Item';
import { useStore } from '../store';

export interface TagItemProps {
  id: string;
}

export default function TagItem({ id }: TagItemProps) {
  const text = useStore((state) => state.tags.get(id)?.text);

  return text ? <Item text={text} /> : null;
}
