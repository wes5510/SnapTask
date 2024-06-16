import { contextBridge, ipcRenderer } from 'electron';
import task from '../main/task';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld('electronAPI', {
  loadDb: (path: string) => ipcRenderer.invoke('get:/db', path),
  addTask: (newTask: task.Task) => ipcRenderer.invoke('create:/tasks', newTask),
  getTasks: () => ipcRenderer.invoke('get:/tasks'),
  updateTaskText: ({ id, text }: Pick<task.Task, 'id' | 'text'>) =>
    ipcRenderer.invoke('update:/tasks/text', { id, text }),
});
