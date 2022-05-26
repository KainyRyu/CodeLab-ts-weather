import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';
import { getLocalStorage } from 'lib/helper';
import { useState } from 'react';

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
  const [value, setValue] = useState('');

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

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const handleAddButton = () => {
    setCities([...cities, value]);
  };

  return (
    <Container>
      {cities?.map((city: string) => (
        <Row key={city}>
          <div>{city}</div>
          <button onClick={handleDeleteButtonClick} name={city} data-testid={city}>
            X
          </button>
        </Row>
      ))}
      <input
        placeholder="add new location"
        type="text"
        onChange={(e) => {
          if (typeof handleInputChange === 'function') {
            handleInputChange(e.target.value);
          }
        }}
        value={value}
      />
      <button onClick={handleAddButton}>add</button>
    </Container>
  );
}
