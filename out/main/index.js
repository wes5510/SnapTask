"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const typeorm = require("typeorm");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Task = class {
  id;
  text;
  completed;
};
__decorateClass([
  typeorm.PrimaryColumn("varchar")
], Task.prototype, "id", 2);
__decorateClass([
  typeorm.Column("text")
], Task.prototype, "text", 2);
__decorateClass([
  typeorm.Column("boolean")
], Task.prototype, "completed", 2);
Task = __decorateClass([
  typeorm.Entity()
], Task);
const AppDataSource = new typeorm.DataSource({
  type: "better-sqlite3",
  database: "../../demo.db",
  synchronize: true,
  logging: true,
  entities: [Task]
});
const repo = AppDataSource.getRepository(Task);
const create = ({ id, text, completed }) => {
  repo.save({ id, text, completed });
};
const get = () => {
  return repo.find();
};
const updateText = ({ id, text }) => {
  return repo.update({ id }, { text });
};
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js")
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
}
electron.app.whenReady().then(async () => {
  await AppDataSource.initialize();
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  electron.ipcMain.on("ping", () => console.log("pong"));
  electron.ipcMain.handle("create:/tasks", (_e, data) => {
    create(data);
  });
  electron.ipcMain.handle("get:/tasks", get);
  electron.ipcMain.handle("update:/tasks/text", (_e, data) => updateText(data));
  createWindow();
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
