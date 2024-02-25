import { ChangeEventHandler } from 'react';
import { Input } from './Input';

interface SearchInputProps {
  value?: string;
  onChange?: ChangeEventHandler;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder="Search Tasks..."
      className="text-md border rounded-md px-4 py-2 border"
    />
  );
}
