import React from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';

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
  const { getCities } = useGlobalContext();
  const cities = JSON.parse(getCities);
  console.log(cities);
  return (
    <Container>
      {cities?.map((city: string) => (
        <Row key={city}>
          <div>{city}</div>
          <button>X</button>
        </Row>
      ))}
    </Container>
  );
}
