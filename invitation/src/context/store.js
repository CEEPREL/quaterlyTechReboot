import { createContext, useContext } from "react";

export const storeContext = createContext(null);
export const useStoreContext = () => {
  return useContext(storeContext);
};
