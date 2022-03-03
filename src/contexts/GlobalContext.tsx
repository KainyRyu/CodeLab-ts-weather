import { useEffect, useContext, createContext } from 'react';
import { CITIES } from 'data';
import { getDataFromSessionStorage, setSessionStorage } from 'helper';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: Props) => {
  useEffect(() => {
    setSessionStorage('locationList', CITIES);
  }, []);

  const myList: string | null = getDataFromSessionStorage('locationList');

  const addToList = () => {};

  return <GlobalContext.Provider value={{ myList, addToList }}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext as default, useGlobalContext, GlobalProvider };
