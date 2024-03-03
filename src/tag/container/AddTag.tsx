import { useState } from 'react';
import AddButton from '../component/AddButton';
import { useStore } from '../store';
import { nanoid } from 'nanoid';

export interface AddTagProps {
  onAdd?: (id: string) => void;
}

export default function AddTag({ onAdd }: AddTagProps) {
  const [text, setText] = useState('');
  const [opened, setOpened] = useState(false);
  const addTag = useStore((state) => state.addTag);

  const handleClick = () => {
    setOpened((prev) => !prev);
  };

  const handleClickAdButton = () => {
    const newTag = {
      id: nanoid(),
      text,
    };

    addTag(newTag);
    setOpened(false);
    setText('');
    onAdd?.(newTag.id);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <AddButton
      open={opened}
      text={text}
      onClick={handleClick}
      onClickSubmit={handleClickAdButton}
      onChangeText={handleChangeText}
    />
  );
}
