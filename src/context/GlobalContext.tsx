import React, { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage } from 'lib/helper';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface GlobalValue {
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
}

const GlobalContext = createContext<GlobalValue>({ cities: [], setCities: () => {} });

function GlobalProvider({ children }: Props) {
  const cityListInit = ['london', 'berlin', 'seoul', 'paris', 'prague'];
  const [cities, setCities] = useState(cityListInit);

  useEffect(() => {
    setLocalStorage({ key: 'cities', value: cities });
  }, [cities]);

  return <GlobalContext.Provider value={{ cities, setCities }}>{children}</GlobalContext.Provider>;
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider };
