import { Button } from './components/Button';
import TaskList from './components/TaskList';
import ListController from './components/ListController';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import TaskItem from './components/TaskItem';
import { TooltipProvider } from './components/Tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="max-w-3xl mx-auto my-16 flex flex-col gap-6">
        <ListController>
          <SearchInput />
          <div className="flex flex-row items-center justify-between">
            <Button size="sm">Add Task</Button>
            <Filter />
          </div>
        </ListController>

        <TaskList>
          <TaskItem />
          <TaskItem />
        </TaskList>
      </div>
    </TooltipProvider>
  );
}

export default App;
