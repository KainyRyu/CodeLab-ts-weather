import React from 'react';
import Styled from 'styled-components';
import useWeather from 'hooks/useWeather';
import { useEffect } from 'react';
import { useGlobalContext } from 'context/GlobalContext';
import { weatherThemes } from 'lib/config';

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
  const { weatherTheme, setWeatherTheme } = useGlobalContext();

  const { isError, isLoading, data, error } = useWeather(selectedCity);

  const theme = (weatherCode: number) => {
    switch (`${weatherCode}`[0]) {
      case '2':
        return weatherThemes.thunderstorm;
      case '3':
        return weatherThemes.drizzle;
      case '5':
        return weatherThemes.rain;
      case '6':
        return weatherThemes.snow;
      case '7':
        return weatherThemes.atmosphere;
      case '8':
        return weatherCode === 800 ? weatherThemes.clear : weatherThemes.cloud;
    }
  };

  useEffect(() => {
    !isLoading && setWeatherTheme(theme(data.weather[0].id)!);
  }, [isLoading, data]);

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
      <p>{data.name}</p>
      <h1>{weatherTheme.icon}</h1>
      <WeatherImg
        src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
      />
      <div>{data.weather[0].main}</div>
      <Li>
        <span>Temprature</span>
        <span>{data.main.temp}℃</span>
      </Li>
      <Li>
        <span>Feels like</span>
        <span>{data.main.feels_like}℃</span>
      </Li>
      <Li>
        <span>Humidity</span>
        <span>{data.main.humidity}%</span>
      </Li>
      <Li>
        <span>wind</span>
        <span>{data.wind.speed}m/s</span>
      </Li>
    </div>
  );
}

const WeatherImg = Styled.img`
  width: 100px;
  height: 100px
`;

const Li = Styled.li`
  display: flex;
  justify-content: space-between;
`;
