import { contextBridge, ipcRenderer } from 'electron';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld('electronAPI', {
  getPersons: () => ipcRenderer.invoke('read:/persons'),
});
