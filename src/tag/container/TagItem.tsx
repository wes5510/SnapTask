import Item from '../component/Item';
import { useStore } from '../store';

export interface TagItemProps {
  id: string;
  onDelete: (id: string) => void;
}

export default function TagItem({ id, onDelete }: TagItemProps) {
  const text = useStore((state) => state.tags.get(id)?.text);
  const deleteTag = useStore((state) => state.deleteTag);

  const handleClickDeleteButton = () => {
    deleteTag(id);
    onDelete?.(id);
  };

  return text ? (
    <Item text={text} onClickDeleteButton={handleClickDeleteButton} />
  ) : null;
}
