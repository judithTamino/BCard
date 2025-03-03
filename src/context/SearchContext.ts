import React, { createContext, SetStateAction, useContext } from "react";

export const SearchContext = createContext<[searchData: string | undefined, setSearchData: React.Dispatch<SetStateAction<string>>]>([undefined, () => {}]);



