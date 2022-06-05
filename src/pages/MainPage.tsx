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

interface Props {
  theme: {
    color: string;
    background: string;
  };
}

const Header = Styled.h1`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  text-shadow: 3px 3px #00000099;
`;

const Flex = Styled.div<Props>`
  ${(props) => props.theme}
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 30vw;
  
  @media (min-width: 700px) {
    padding: 100px 5vw 0 5vw;
    flex-flow: row;
    justify-content: space-evenly;
  }
`;

export default function Main() {
  const { selectedCity, weatherTheme } = useGlobalContext();

  return (
    <Flex theme={weatherTheme.theme}>
      <Header>TS Weather</Header>
      {selectedCity.length > 0 && <SelectedCity selectedCity={selectedCity} />}
      <LocationList />
    </Flex>
  );
}
