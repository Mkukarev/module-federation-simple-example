/// <reference types="react" />

declare module "remote/App" {
  const App: React.ComponentType;

  export default App;
}

declare module "host/store" {
  const AppProvider: any;
  const useAppContext: any;

  export { AppProvider, useAppContext };
}