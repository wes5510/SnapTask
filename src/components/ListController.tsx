import { PropsWithChildren } from 'react';

export default function ListController({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
