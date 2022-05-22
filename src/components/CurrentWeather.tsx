import React from 'react';
import Styled from 'styled-components';
import useWeather from 'hooks/useWeather';

interface Props {
  readonly location: string;
  readonly degrees: number;
  readonly wind: number;
}
export default function CurrentWeather({ location = 'London', degrees = 30, wind = 0 }: Props) {
  // const { data } = useWeather('london');

  return (
    <Container>
      <div>{location}</div>
      <div>{degrees}℃</div>
      <div>{wind}m/s</div>
    </Container>
  );
}

const Container = Styled.div`
  width: 300px;
  height: 300px;
  border: white 1px solid;
`;
