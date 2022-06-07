import React from 'react';
import useWeather from 'hooks/useWeather';
import WeatherCard from './WeatherCard';

interface Props {
  readonly selectedCity: string;
}

export default function SelectedCity({ selectedCity }: Props) {
  const { isError, isLoading, data, error } = useWeather(selectedCity);

  return <WeatherCard isError={isError} isLoading={isLoading} data={data} error={error} />;
}
