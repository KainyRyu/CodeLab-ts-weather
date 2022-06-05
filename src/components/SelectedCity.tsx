import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';
import useWeather from 'hooks/useWeather';
import { weatherThemes } from 'lib/config';
import Img404 from 'assets/404.png';

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

const WeatherImg = Styled.img`
  width: 100px;
  height: 100px
`;

const Li = Styled.span`
  display: flex;
  justify-content: space-between;
`;

const LostImg = Styled.img`
  width: 400px;
  height: auto;
`;

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
    !isLoading && data && setWeatherTheme(theme(data?.weather[0].id)!);
  }, [isLoading, data, setWeatherTheme]);

  return isLoading ? (
    <div>loading...</div>
  ) : isError ? (
    <div>
      <h3>
        {selectedCity} : {(error as Error).response.data.message}
      </h3>
      <LostImg src={Img404} alt="404" />
      {/* <div>
        {(error as Error).response.data.cod}: {(error as Error).response.data.message}
      </div> */}
    </div>
  ) : (
    <div>
      <h1>{data.name}</h1>
      <WeatherImg src={weatherTheme.imgUrl} alt="weather" />
      {/* weather api's icon
      <WeatherImg
        src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
      /> */}
      <h3>{data.weather[0].main}</h3>
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
