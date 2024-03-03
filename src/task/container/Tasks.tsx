import Item from '../component/Item';
import { useStore } from '../store';

export default function Tasks() {
  const tasks = useStore((state) => [...state.tasks.values()]);

  return tasks.map(({ id, text, completed }) => (
    <Item key={id} id={id} text={text} checked={completed} />
  ));
}
