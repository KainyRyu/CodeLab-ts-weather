import { useQuery } from 'react-query';
import axios from 'axios';

const APIKEY: string = 'bd5de54bb8eed93db96a311f088b9415';

const getWeatherBycityname = async (cityname: string) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`,
  );
  return data;
};

export default function useWeather(cityname: string) {
  return useQuery(['post', cityname], () => getWeatherBycityname(cityname));
}
