import React from 'React';
import { render, screen } from '@testing-library/react';
import LocationList from 'components/LocationList';

describe('<LocationList/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<LocationList />);

    const berlin = screen.getByText('berlin');
    expect(berlin).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
