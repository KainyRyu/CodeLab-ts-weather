import Styled from 'styled-components';
import LocationList from 'components/LocationList';
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
  const { selectedCity, weatherTheme } = useGlobalContext();

  return (
    <Flex theme={weatherTheme.theme}>
      <h1>TS Weather</h1>
      <LocationList />
      {selectedCity.length > 0 && <SelectedCity selectedCity={selectedCity} />}
    </Flex>
  );
}

interface Props {
  theme: {
    color: string;
    background: string;
  };
}

const Flex = Styled.div<Props>`
  ${(props) => props.theme}
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 30vw;
  
  @media (min-width: 700px) {
    padding: 10vw;
    flex-flow: row;
    justify-content: space-evenly;
  }
`;
