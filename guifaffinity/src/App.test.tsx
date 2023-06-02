import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('displays a gif', () => {
  render(<App />);
  const gifs = screen.getAllByTestId("gif")
  expect(gifs).toHaveLength(1);
});
