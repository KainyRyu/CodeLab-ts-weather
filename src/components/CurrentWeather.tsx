import useWeather from 'hooks/useWeather';
import { getWeatherByCityName } from 'lib/apis';
import React from 'react';
import Styled from 'styled-components';
interface Props {
  readonly location: string;
  readonly degrees: number;
}
export default function CurrentWeather({ location = 'London', degrees = 30 }: Props) {
  // const { data } = useWeather('london');

  return (
    <Container>
      <div data-testid="location">{location}</div>
      <div data-testid="degrees">{degrees}℃</div>
    </Container>
  );
}

const Container = Styled.div`
  width: 300px;
  height: 300px;
  border: white 1px solid;
`;
