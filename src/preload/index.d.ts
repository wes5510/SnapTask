declare global {
  interface Window {
    electronAPI: {
      getPersons: () => Promise<unknown[]>;
    };
  }
}
