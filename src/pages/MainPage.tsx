import Styled from 'styled-components';
import CurrentWeather from 'components/CurrentWeather';
import LocationList from 'components/LocationList';
import data from 'lib/mocked_weather.json';
import SelectedCity from 'components/SelectedCity';
import { useGlobalContext } from 'context/GlobalContext';

/**
 *
 * Main
 *    - Default location weather
 *    - Location lists
 *         - CRUD
 */

export default function Main() {
  const { selectedCity } = useGlobalContext();

  return (
    <Flex>
      <div>Here, Now</div>
      <CurrentWeather location={data.name} degrees={data.main.temp} wind={data.wind.speed} />
      <LocationList />
      {selectedCity.length > 0 && <SelectedCity selectedCity={selectedCity} />}
    </Flex>
  );
}

const Flex = Styled.div`
  display: flex;
  flex-flow: column;
`;
