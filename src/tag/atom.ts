import { atom } from 'jotai';
import { Tag } from './type';

export const TagsAtom = atom<Tag[]>([
  {
    id: 'tag-1',
    text: 'Tag 1',
  },
  {
    id: 'tag-2',
    text: 'Tag 2',
  },
  {
    id: 'tag-3',
    text: 'Tag 3',
  },
  {
    id: 'tag-4',
    text: 'Tag 4',
  },
  {
    id: 'tag-5',
    text: 'Tag 5',
  },
]);
