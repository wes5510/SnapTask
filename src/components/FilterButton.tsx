import { PropsWithChildren } from 'react';
import { Button } from './Button';

interface FilterButtonProps extends PropsWithChildren {
  active?: boolean;
}

export default function FilterButton({ active, children }: FilterButtonProps) {
  return (
    <Button variant="link" size="sm" active={active}>
      {children}
    </Button>
  );
}
