declare global {
  interface Window {
    electronAPI: {
      addTask: () => Promise<void>;
    };
  }
}
