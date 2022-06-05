import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';
import { getLocalStorage } from 'lib/helper';
import Input from './Input';

const Container = Styled.div`
  width: 60vw;
  padding: 20px;
  @media (min-width:700px){
    width: 40vw;
  }
`;

const FlexWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface Props {
  readonly selectedCity: boolean;
}

const Row = Styled.span<Props>`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 0;
  margin: 5px;
  line-height: 1;
  margin-top: 5px;
  ${(props) =>
    props.selectedCity
      ? `
  font-weight: 800;
  font-size: 1.5em;
  text-shadow: -0.8px -0.8px 0 #00000088, 0.8px -0.8px 0 #00000088, -0.8px 0.8px 0 #00000088, 0.8px 0.8px 0 #00000088;
  `
      : ``}
  
`;

const DeleteButton = Styled.button`
  align-self: flex-end;
  border-radius: 30px;
  border: black 1px solid;
  padding: 0;
  font-size: 10px;
  width: 14px;
  height: 14px;
  background: none;
`;

export default function LocationList() {
  const { cities, selectedCity, setCities, handleCityClick } = useGlobalContext();

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const { target } = event;
    setCities(cities.filter((city) => city !== (target as HTMLButtonElement).name));
  };

  const getCityList = () => {
    const list = getLocalStorage('cities');
    if (!list) {
      return cities;
    }
    return JSON.parse(list);
  };

  useEffect(() => {
    setCities(getCityList());
  }, []);

  return (
    <Container>
      <Input />
      <FlexWrap>
        {cities?.map((city: string) => (
          <Row key={city} selectedCity={selectedCity === city}>
            <div onClick={() => handleCityClick(city)} data-name={city}>
              {city}
            </div>
            <DeleteButton onClick={handleDeleteButtonClick} name={city} data-testid={city}>
              X
            </DeleteButton>
          </Row>
        ))}
      </FlexWrap>
    </Container>
  );
}
