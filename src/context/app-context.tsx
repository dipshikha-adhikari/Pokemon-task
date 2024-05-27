import { createContext, ReactNode, useContext, useState } from "react";

interface InitialState {
  searchBoxOpen: boolean;
  setSearchBoxOpen: (props: boolean) => void;
}

const initialState: InitialState = {
  searchBoxOpen: false,
  setSearchBoxOpen: () => {},
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  return (
    <AppContext.Provider value={{ searchBoxOpen, setSearchBoxOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
