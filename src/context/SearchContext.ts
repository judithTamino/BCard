import { createContext, useContext} from "react";

export interface ISearch {
  searchTerm: string;
  setSearchTerm: (term:string) => void;
}

export const SearchContext = createContext<ISearch | undefined>(undefined);

export const SearchProvider = SearchContext.Provider;

export default function useSearch() {
  return useContext(SearchContext) as ISearch;
}



