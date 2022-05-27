import useWeather from 'hooks/useWeather';
import React from 'react';

interface Props {
  readonly selectedCity: string;
}

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
export default function SelectedCity({ selectedCity }: Props) {
  // const data = useWeather(selectedCity);
  const { isError, isLoading,  data, error } = useWeather(selectedCity);
  // const errorData = isError && (error as Error).response.data;

  // console.log(data);
  // return <div></div>;

  return isLoading ? (
    <div>loading...</div>
  ) : isError ? (
    <div>
      <div>selected city : {selectedCity}</div>
      <div>
        {(error as Error).response.data.cod}: {(error as Error).response.data.message}
      </div>
    </div>
  ) : (
    <div>
      <h1>selectedCity: {data.name}</h1>
      <div>{data.weather[0].main}</div>
      <div>{data.main.temp}℃</div>
      <div>wind: {data.wind.speed}m/s</div>
    </div>
  );
}
