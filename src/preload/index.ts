import { contextBridge, ipcRenderer } from 'electron';
import task from '../main/task';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld('electronAPI', {
  addTask: (newTask: task.Task) => ipcRenderer.invoke('create:/tasks', newTask),
  getTasks: () => ipcRenderer.invoke('get:/tasks'),
});
