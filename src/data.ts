//https://openweathermap.org/current

export const THEME = {
  sunny: {},
  cloud: {},
  rain: {},
  snow: {},
};

export const CITIES: { location: string }[] = [
  { location: 'seoul' },
  { location: 'berlin' },
  { location: 'london' },
  { location: 'paris' },
  { location: 'newyork' },
];

export const CURRENT = {
  base: 'stations',
  clouds: { all: 75 },
  cod: 200,
  coord: { lon: -0.1257, lat: 51.5085 },
  dt: 1645076031,
  id: 2643743,
  main: {
    feels_like: 5.53,
    humidity: 74,
    pressure: 1005,
    temp: 9.17,
    temp_max: 10.21,
    temp_min: 7.7,
  },
  name: 'London',
  sys: {
    type: 2,
    id: 2019646,
    country: 'GB',
    sunrise: 1645081862,
    sunset: 1645118298,
  },
  weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
  wind: { speed: 8.23, deg: 260, gust: 13.38 },
};
