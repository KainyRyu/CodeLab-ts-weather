import { useEffect, useContext, createContext } from 'react';
import { CITIES } from 'data';
import { getDataFromLocalStorage, setLocalStorage } from 'helper';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: Props) => {
  useEffect(() => {
    setLocalStorage('locationList', JSON.stringify(CITIES));
  }, []);

  const myList: string | null = getDataFromLocalStorage('locationList');

  const addToList = () => {};

  return <GlobalContext.Provider value={{ myList, addToList }}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext as default, useGlobalContext, GlobalProvider };
