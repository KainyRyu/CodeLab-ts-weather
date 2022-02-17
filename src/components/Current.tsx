import React, { useEffect, useState } from 'react';
import { getWeatherByCityName } from '../apis';
import { CURRENT } from '../pages/data';

export default function Current() {
  const [currentWeather, setCurrentWeather] = useState();

  const {
    weather,
    name,
    main: { temp, humidity }
  } = CURRENT;

  useEffect(() => {
    getWeatherByCityName('london')
      .then(data => setCurrentWeather(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{weather[0].description}</h3>
      <h3>temp: {temp}</h3>
      <h3>humidity: {humidity}</h3>
      <h3>{}</h3>
      <h3>{}</h3>
    </div>
  );
}
