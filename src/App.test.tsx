import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
