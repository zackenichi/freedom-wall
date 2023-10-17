// import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('App renders', () => {
  render(<App />);
  const appContainer = screen.getByRole('main');
  expect(appContainer).toBeInTheDocument();
});
