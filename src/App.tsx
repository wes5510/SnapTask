import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';

function App() {
  return (
    <div className="max-w-3xl mx-auto my-16 flex flex-col gap-6">
      <Input
        placeholder="Search Tasks..."
        className="text-lg h-12 border rounded-md px-4 py-2 border"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <Button size="sm">Add Task</Button>
          <div className="flex flex-row items-center">
            <Button variant="link" size="sm" active>
              In Progress
            </Button>
            <Separator orientation="vertical" />
            <Button variant="link" size="sm">
              Done
            </Button>
            <Separator orientation="vertical" />
            <Button variant="link" size="sm">
              All
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center">
            <div className="flex p-2 items-center">
              <Checkbox />
            </div>
            <Input placeholder="What would you like to do?" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="flex p-2 items-center">
              <Checkbox />
            </div>
            <Input placeholder="What would you like to do?" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="flex p-2 items-center">
              <Checkbox />
            </div>
            <Input placeholder="What would you like to do?" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="flex p-2 items-center">
              <Checkbox />
            </div>
            <Input placeholder="What would you like to do?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
