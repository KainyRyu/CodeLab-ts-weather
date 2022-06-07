import Styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useGlobalContext } from 'context/GlobalContext';
import { getWeatherByCords } from 'lib/apis';
import LocationList from 'components/LocationList';
import SelectedCity from 'components/SelectedCity';

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
    padding: 25vh 5vw 0 5vw;
    flex-flow: row;
    justify-content: space-evenly;
  }
`;

export default function Main() {
  const { localLocation, weatherTheme } = useGlobalContext();

  useEffect(() => {
    console.log(localLocation);
  }, [localLocation]);

  const data = localLocation && getWeatherByCords(localLocation?.lat, localLocation?.lon);
  console.log(data);

  return (
    <Flex theme={weatherTheme.theme}>
      <Header>TS Weather</Header>
      {selectedCity.length > 0 && <SelectedCity selectedCity={selectedCity} />}
      <LocationList />
    </Flex>
  );
}
