import { ChangeEventHandler } from 'react';
import * as common from '../../common';

interface SearchInputProps {
  value?: string;
  onChange?: ChangeEventHandler;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <common.Input
      value={value}
      onChange={onChange}
      placeholder="Search Tasks..."
      className="text-md border rounded-md px-4 py-2 border"
    />
  );
}
