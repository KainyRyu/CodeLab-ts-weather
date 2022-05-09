import React from 'React';
import { render, screen } from '@testing-library/react';
import Main from 'pages/MainPage';

describe('<MainPage/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<Main />);

    expect(container).toMatchSnapshot();
  });
});
