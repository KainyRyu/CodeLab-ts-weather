import React from 'React';
import { render, screen } from '@testing-library/react';
import CurrentWeather from 'components/CurrentWeather';

describe('<CurrentWeather/>', () => {
  it('renders component correctly', () => {
    render(<CurrentWeather location="london" degrees={30} wind={0} />);

    const location = screen.getByText('london');
    expect(location).toBeInTheDocument();
    const degrees = screen.getByText('30℃');
    expect(degrees).toBeInTheDocument();
    const wind = screen.getByText('0m/s');
    expect(wind).toBeInTheDocument();
  });
});
