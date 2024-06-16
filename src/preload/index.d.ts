declare global {
  interface Window {
    electronAPI: {
      addTask: () => Promise<void>;
      loadDb: (path: string) => Promise<void>;
    };
  }
}
