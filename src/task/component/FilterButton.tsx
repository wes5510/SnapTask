import { PropsWithChildren } from 'react';
import * as common from '../../common';

interface FilterButtonProps extends PropsWithChildren {
  active?: boolean;
}

export default function FilterButton({ active, children }: FilterButtonProps) {
  return (
    <common.Button variant="link" size="sm" active={active}>
      {children}
    </common.Button>
  );
}
