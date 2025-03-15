import { createContext, useContext } from "react";
import { IUser } from "../interfaces/users/IUser";

export interface IUserContext {
  user: IUser;
  setUser: (user:IUser) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = UserContext.Provider;

export default function useUser() {
  return useContext(UserContext) as IUserContext;
}

