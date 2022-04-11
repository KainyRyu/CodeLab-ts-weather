import { AxiosResponse } from 'axios';

export type WeatherGetParams = null;

interface WeatherDetail {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherGetPayload {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherDetail[];
  wind: {
    deg: number;
    speed: number;
  };
}

export type ApiResponse<TResponse> = AxiosResponse<TResponse>;
