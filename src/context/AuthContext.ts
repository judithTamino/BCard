import { createContext, useContext } from "react";

interface IAuth {
  isLoggedIn:boolean;
  login: () => void;
  logout: () => void;
}

// creating the context
const AutoContext = createContext<IAuth | undefined>(undefined);

// providing the context to the app 
export const AutoProvider = AutoContext.Provider;

// Custom hook to use authentication context
export default function useAuto() {
  return useContext(AutoContext) as IAuth;
}
 
