"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  getPersons: () => electron.ipcRenderer.invoke("read:/persons")
});
