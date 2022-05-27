import React, { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage } from 'lib/helper';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface GlobalValue {
  cities: string[];
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
  handleCityClick: (value: string) => void;
}

const GlobalContext = createContext<GlobalValue>({
  cities: [],
  setCities: () => {},
  selectedCity: '',
  setSelectedCity: () => '',
  handleCityClick: () => {},
});

function GlobalProvider({ children }: Props) {
  const cityListInit = ['london', 'berlin', 'seoul', 'paris', 'prague'];
  const [cities, setCities] = useState(cityListInit);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setLocalStorage({ key: 'cities', value: cities });
  }, [cities]);

  const handleCityClick = (value: string) => {
    setSelectedCity(value);
  };

  return (
    <GlobalContext.Provider
      value={{ cities, selectedCity, setSelectedCity, setCities, handleCityClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider };
