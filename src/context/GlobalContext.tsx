import React from 'react';
import { createContext, useContext, useEffect } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GlobalContext = createContext({});

function GlobalProvider({ children }: Props) {
  const cityListInit = ['london', 'berlin', 'seoul', 'paris', 'prague'];
  const getCities: string | null = localStorage.getItem('cityList');
  const setCities: (value: string) => void = (value: string) =>
    localStorage.setItem('cityList', value);

  useEffect(() => {
    setCities(JSON.stringify(cityListInit));
  });
  return (
    <GlobalContext.Provider value={{ getCities, setCities }}>{children}</GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider };
