import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as common from '../../common';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    className={common.cn('shrink-0 bg-slate-300 h-5 w-[1px]', className)}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
