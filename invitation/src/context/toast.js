import { createContext, useContext } from "react";

export const toastContext = createContext(null);
export function useToastContext() {
  return useContext(toastContext);
}
