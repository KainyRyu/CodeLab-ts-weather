import { useState, useEffect } from 'react';
import { getWeatherByCords } from 'lib/apis';
import WeatherCard from './WeatherCard';

interface Error {
  readonly config: {
    transitional: {};
    transformRequest: [];
    transformResponse: [];
    timeout: number;
  };
  readonly isAxiosError: boolean;
  readonly request: {};
  readonly response: {
    data: { cod: string; message: string };
    status: number;
    statusText: string;
    headers: {};
  };
  readonly toJSON: () => void;
}

export default function CurrentLocation() {
  const { localLocation, setLocalLocation } = useState({ lat: 0, lon: 0 });

  navigator.geolocation.getCurrentPosition(
    ({ coords, timestamp }) =>
      coords &&
      setLocalLocation({ lat: coords.latitude.toFixed(4), lon: coords.longitude.toFixed(4) }),
  );

  const data = localLocation && getWeatherByCords(localLocation?.lat, localLocation?.lon);
  console.log(data);
  console.log(localLocation);
  return (
    <WeatherCard
      isError={data.isError}
      isLoading={data.isLoading}
      data={data.data}
      error={data.error}
    />
  );
}
