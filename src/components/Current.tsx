import useWeather from 'hooks/useWeather';
import { CURRENT } from '../data';

interface Props {
  readonly city?: string;
}

export default function Current({ city = 'london' }: Props) {
  const { status, data, error, isFetching } = useWeather('london');
  console.log({ data, status, error, isFetching });
  const {
    weather,
    name,
    main: { temp, humidity },
  } = CURRENT;

  // useEffect(() => {
  //   getWeatherByCityName(city)
  //     .then((data) => setCurrentWeather(data))
  //     .catch((e) => console.log(e));
  // }, [city]);

  // console.log(currentWeather);

  return (
    <div>
      <h1>{city || name}</h1>
      <h3>{weather[0].description}</h3>
      <h3>temp: {temp}</h3>
      <h3>humidity: {humidity}</h3>
    </div>
  );
}
