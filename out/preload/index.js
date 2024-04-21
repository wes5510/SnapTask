"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  addTask: (newTask) => electron.ipcRenderer.invoke("create:/tasks", newTask),
  getTasks: () => electron.ipcRenderer.invoke("get:/tasks"),
  updateTaskText: ({ id, text }) => electron.ipcRenderer.invoke("update:/tasks/text", { id, text })
});
