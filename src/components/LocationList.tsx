import React from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';
import { setLocalStorage } from 'helper';

const Container = Styled.div`
  width: 300px;
`;

const Row = Styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: white 1px solid;
  margin-top: 5px;
`;

export default function LocationList() {
  const { cities, setCities } = useGlobalContext();

  const handleDeleteButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const { target } = event;
    setLocalStorage({ key: 'cities', value: cities.filter((city) => city !== target.name) });
  };

  return (
    <Container>
      {cities?.map((city: string) => (
        <Row key={city}>
          <div>{city}</div>
          <button onClick={handleDeleteButtonClick} name={city}>
            X
          </button>
        </Row>
      ))}
    </Container>
  );
}
