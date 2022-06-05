import React, { useState } from 'react';
import Styled from 'styled-components';
import { useGlobalContext } from 'context/GlobalContext';

const Container = Styled.div`
  margin-top: 30px;
`;

const InputBox = Styled.input`
  padding: 3px 10px;
  margin: 20px 0;
  height: 25px;
  box-sizing: border-box;
  background: #ffffff80;
  border: black 1px solid;
  border-radius: 15px;
  margin-right: 10px;
`;

const Button = Styled.input`
  height: 25px;
  box-sizing: border-box;
  padding: 3px 10px;
  border-radius: 15px;
  border: solid 1px black;
  background: none;
`;

export default function Input() {
  const { cities, setCities } = useGlobalContext();
  const [value, setValue] = useState('');
  const [placeHolder, setPlaceholder] = useState('Add new location');

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const handleAddButton = () => {
    if (cities.includes(value)) {
      setPlaceholder(`${value} already exists`);
      setValue('');
    } else {
      setCities([...cities, value]);
    }
  };

  return (
    <Container>
      <InputBox
        placeholder={placeHolder}
        type="text"
        onChange={(e) => {
          if (typeof handleInputChange === 'function') {
            handleInputChange(e.target.value);
          }
        }}
        value={value}
      />
      <Button type="submit" onClick={handleAddButton} value="add" />
    </Container>
  );
}
