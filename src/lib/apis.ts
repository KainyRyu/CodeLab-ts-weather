import axios from 'axios';

const APIKEY: string = 'bd5de54bb8eed93db96a311f088b9415';

export const getWeatherByCityName = async (cityname: string) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return;
};

export const getWeatherByCords = async (lat: string, lon: string) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
