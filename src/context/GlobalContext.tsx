import React, { createContext, useContext, useEffect, useState } from 'react';
import { setLocalStorage } from 'lib/helper';

interface Props {
  children: JSX.Element | JSX.Element[];
}
interface Theme {
  icon: string;
  theme: { color: string; backgroundColor: string };
  imgUrl?: string;
}
interface GlobalValue {
  cities: string[];
  selectedCity: string;
  weatherTheme: Theme;

  setWeatherTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
  handleCityClick: (value: string) => void;
}

const GlobalContext = createContext<GlobalValue>({
  cities: [],
  setCities: () => {},
  selectedCity: '',
  weatherTheme: { icon: '', theme: { color: '', backgroundColor: '' }, imgUrl: '' },

  setWeatherTheme: () => {},
  setSelectedCity: () => '',
  handleCityClick: () => {},
});

function GlobalProvider({ children }: Props) {
  const cityListInit = ['London', 'Berlin', 'Seoul', 'Paris', 'Prague'];
  const [cities, setCities] = useState(cityListInit);
  // const { localLocation, setLocalLocation } = useState({ lat: 0, lon: 0 });
  const [selectedCity, setSelectedCity] = useState('london');
  const [weatherTheme, setWeatherTheme] = useState<Theme>({
    icon: '☀',
    theme: { color: '#FFA820', backgroundColor: '#FFF8EE' },
    imgUrl: '',
  });

  useEffect(() => {
    setLocalStorage({ key: 'cities', value: cities });
  }, [cities]);

  const handleCityClick = (value: string) => {
    setSelectedCity(value);
  };
  let data;
  const success = (pos) => {
    const crd = pos.coords;
    console.log('crd----', crd);
    // coords &&
    data = { lat: crd.latitude.toFixed(4), lon: crd.longitude.toFixed(4) };
  };
  const error = (err) => {
    console.log('err----', err);
    console.log(`error ${err}`);
  };

  const localLocation = navigator.geolocation.getCurrentPosition(success, error);
  console.log(data);
  return (
    <GlobalContext.Provider
      value={{
        cities,
        selectedCity,
        weatherTheme,
        localLocation,
        setWeatherTheme,
        setSelectedCity,
        setCities,
        handleCityClick,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalProvider };
