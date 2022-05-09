import React from 'react';
interface Props {
  readonly location: string;
  readonly degrees: number;
}
export default function CurrentWeather({ location, degrees }: Props) {
  return (
    <div>
      <div data-testid="location">{location}</div>
      <div data-testid="degrees">{degrees}℃</div>
    </div>
  );
}
