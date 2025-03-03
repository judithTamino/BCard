import { createContext, useContext } from "react";


export type Theme = 'light' | 'dark';

export interface ITheme {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ITheme | undefined>(undefined);

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext) as ITheme;
}