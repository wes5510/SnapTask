import { ChangeEvent, useRef } from 'react';
import { Button } from './Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function LoadFileButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const loadDb = useMutation({
    mutationFn: (path: string) => window.electronAPI.loadDb(path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadDb.mutate(file.path);
    }
  };

  return (
    <>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleChange}
        accept=".db"
      />
      <Button size="sm" onClick={handleClick}>
        Load File
      </Button>
    </>
  );
}
