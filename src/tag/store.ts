import { create } from 'zustand';
import { Tag } from './type';

export type State = {
  tags: Map<Tag['id'], Tag>;
  addTag: (tag: Tag) => void;
};

export const useStore = create<State>()((set) => ({
  tags: new Map([
    [
      'tag-1',
      {
        id: 'tag-1',
        text: 'Tag 1',
      },
    ],
    [
      'tag-2',
      {
        id: 'tag-2',
        text: 'Tag 2',
      },
    ],
    [
      'tag-3',
      {
        id: 'tag-3',
        text: 'Tag 3',
      },
    ],
    [
      'tag-4',
      {
        id: 'tag-4',
        text: 'Tag 4',
      },
    ],
    [
      'tag-5',
      {
        id: 'tag-5',
        text: 'Tag 5',
      },
    ],
  ]),
  addTag: (tag) => {
    set((state) => ({
      tags: new Map([[tag.id, tag], ...state.tags]),
    }));
  },
}));
