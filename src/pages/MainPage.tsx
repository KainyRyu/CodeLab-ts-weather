import Styled from 'styled-components';
import CurrentWeather from 'components/CurrentWeather';
import LocationList from 'components/LocationList';
import data from 'lib/mocked_weather.json';

/**
 *
 * Main
 *    - Default location weather
 *    - Location lists
 *         - CRUD
 */

export default function Main() {
  return (
    <Flex>
      <div>Here, Now</div>
      <CurrentWeather location={data.name} degrees={data.main.temp} wind={data.wind.speed} />
      <LocationList />
    </Flex>
  );
}

const Flex = Styled.div`
  display: flex;
  flex-flow: column;
`;
