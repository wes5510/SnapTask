import * as task from './task';
import * as common from './common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <common.TooltipProvider>
        <div className="max-w-3xl mx-auto my-16 flex flex-col gap-6">
          <task.ListController>
            <task.SearchInput />
            <div className="flex flex-row items-center justify-between">
              <task.AddTask />
              <task.Filter />
            </div>
          </task.ListController>

          <task.List>
            <task.Tasks />
          </task.List>
        </div>
      </common.TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
