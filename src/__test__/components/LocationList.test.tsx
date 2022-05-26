import React from 'React';
import { fireEvent, render, screen } from '@testing-library/react';
import LocationList from 'components/LocationList';
import { GlobalProvider } from 'context/GlobalContext';

describe('<LocationList/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<LocationList />);

    expect(container).toMatchSnapshot();
  });

  it('gets location list from globalProvider', () => {
    const { container } = render(
      <GlobalProvider>
        <LocationList />
      </GlobalProvider>,
    );

    const paris = screen.getByText('paris');
    expect(paris).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes city', () => {
    const { container } = render(
      <GlobalProvider>
        <LocationList />
      </GlobalProvider>,
    );

    const deleteButton = screen.getByTestId('paris');
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(deleteButton).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('adds city', () => {
    const { container } = render(
      <GlobalProvider>
        <LocationList />
      </GlobalProvider>,
    );

    const input = screen.getByPlaceholderText('add new location');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('add');
    expect(button).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'hongkong' } });
    fireEvent.click(button);
    const hongkong = screen.getByText('hongkong');

    expect(hongkong).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
