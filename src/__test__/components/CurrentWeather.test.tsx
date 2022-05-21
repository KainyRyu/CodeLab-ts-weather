import React from 'React';
import { render, screen } from '@testing-library/react';
import CurrentWeather from 'components/CurrentWeather';

describe('<CurrentWeather/>', () => {
  it('renders component correctly', () => {
    render(<CurrentWeather location="london" degrees={30} />);

    const location = screen.getByTestId('location');
    expect(location).toBeInTheDocument();
    const degrees = screen.getByTestId('degrees');
    expect(degrees).toBeInTheDocument();
  });
});
  