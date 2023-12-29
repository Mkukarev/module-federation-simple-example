/// <reference types="react" />

declare module "host/AppProvider" {
  // const AppProvider: React.ComponentType;
  const AppProvider: any;

  export default AppProvider;
}

declare module "host/store" {
  // const AppProvider: React.ComponentType;
  const AppProvider: any;
  const useAppContext: any;

  export { AppProvider, useAppContext };
}