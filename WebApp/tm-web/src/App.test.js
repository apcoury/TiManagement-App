import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import SignUpPage from './Pages/SignUpPage';
import LandingPage from './Pages/LandingPage';

test('renders learn react link', () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
